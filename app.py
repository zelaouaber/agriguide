from flask import Flask, render_template, request, redirect, session
import sqlite3

app = Flask(__name__)
app.secret_key = "agrivest_secret_key"

@app.route("/")
def home():
    return render_template("index.html")

# ================= INSCRIPTION =================

@app.route("/register", methods=["POST"])
def register():

    nom = request.form["nom"]
    prenom = request.form["prenom"]
    role = request.form["role"]
    telephone = request.form["telephone"]
    email = request.form["email"]
    password = request.form["password"]
    confirm_password = request.form["confirm_password"]

    if password != confirm_password:
        return render_template(
            "index.html",
            register_error="Les mots de passe ne correspondent pas"
        )

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    # ================= AJOUT IMPORTANT =================
    cursor.execute("""
        SELECT *
        FROM users
        WHERE email = ?
        OR (nom = ? AND prenom = ?)
    """, (email, nom, prenom))

    existing_user = cursor.fetchone()

    if existing_user:
        conn.close()
        return render_template(
            "index.html",
            register_error="Utilisateur déjà existant (email ou nom + prénom)",
            active_form="register",
            form_data=request.form
        )
    
    # ===================================================

    try:
        cursor.execute("""
        INSERT INTO users(
            nom,
            prenom,
            role,
            telephone,
            email,
            password
        )
        VALUES(?,?,?,?,?,?)
        """,
        (nom, prenom, role, telephone, email, password))

        conn.commit()

    except sqlite3.IntegrityError:
        conn.close()
        return render_template(
            "index.html",
            register_error="Cet email existe déjà"
        )

    conn.close()

    session["user"] = f"{nom} {prenom}"
    session["role"] = role
    session["email"] = email   # ✅ IMPORTANT AJOUTÉ

    return render_template(
        "index.html",
        success_message="Inscription réussie. Vous pouvez maintenant vous connecter."
    )
# ================= CONNEXION =================

@app.route("/login", methods=["POST"])
def login():

    email = request.form["email"]
    password = request.form["password"]

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("""
    SELECT *
    FROM users
    WHERE email=? AND password=?
    """,
    (email, password))

    user = cursor.fetchone()

    conn.close()

    if user:
        session["user"] = f"{user[1]} {user[2]}"
        session["role"] = user[3]
        session["email"] = user[4]  # ✅ IMPORTANT AJOUTÉ
        return redirect("/dashboard")
    return render_template(
        "index.html",
        login_error="Email ou mot de passe incorrect"
    )

# ================= DASHBOARD =================

@app.route("/dashboard")
def dashboard():

    if "user" not in session:
        return redirect("/")

    return render_template(
        "dashboard.html",
        user=session["user"],
        role=session["role"]
    )

# ================= LOGOUT =================

@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")
#========= supprimer le compte=============

@app.route("/delete_account")
def delete_account():

    if "user" not in session:
        return redirect("/")

    email = session["email"]

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute(
        "DELETE FROM users WHERE email=?",
        (email,)
    )

    conn.commit()
    conn.close()

    session.clear()

    return redirect("/")


@app.route("/pay")
def pay():

    if "user" not in session:
        return redirect("/")

    session["paid"] = True

    return redirect("/dashboard")

@app.route("/static/docs/lois")
def pdf_lois():

    if "user" not in session:
        return redirect("/")

    if not session.get("paid"):
        return render_template("dashboard.html",
            user=session["user"],
            role=session["role"],
            pay_required="⚠️ Vous devez payer pour accéder aux documents"
        )

    return render_template("lois.html")

from flask import jsonify
import sqlite3

@app.route("/finance-data")
def finance_data():

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    # Nombre total d'utilisateurs
    cursor.execute("SELECT COUNT(*) FROM users")
    users = cursor.fetchone()[0]

    # Nombre d'agriculteurs
    cursor.execute("SELECT COUNT(*) FROM users WHERE role='Agriculteur'")
    farmers = cursor.fetchone()[0]

    # Nombre d'investisseurs nationaux
    cursor.execute("SELECT COUNT(*) FROM users WHERE role='Investisseur National'")
    national = cursor.fetchone()[0]

    # Nombre d'investisseurs étrangers
    cursor.execute("SELECT COUNT(*) FROM users WHERE role='Investisseur Étranger'")
    foreign = cursor.fetchone()[0]

    # Nombre d'abonnés Premium
    cursor.execute("SELECT COUNT(*) FROM users WHERE premium=1")
    premium = cursor.fetchone()[0]

    conn.close()

    return jsonify({
        "users": users,
        "farmers": farmers,
        "national": national,
        "foreign": foreign,
        "premium": premium
    })



if __name__ == "__main__":
    app.run(debug=True)