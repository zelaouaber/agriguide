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
            password,
            subscription,
            plan
        )
        VALUES(?,?,?,?,?,?,?,?)
        """,
        (
            nom,
            prenom,
            role,
            telephone,
            email,
            password,
            "free",
            ""
        ))

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
        session["email"] = user[5]  # ✅ IMPORTANT AJOUTÉ
        session["subscription"] = user[8]
        session["plan"] = user[9]
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
        role=session["role"],
        subscription=session.get("subscription", "free")
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



@app.route("/static/docs/lois")
def pdf_lois():

    if "user" not in session:
        return redirect("/")

    if session.get("subscription") != "premium":

        return render_template(
            "dashboard.html",
            user=session["user"],
            role=session["role"],
            pay_required="⚠️ Vous devez être Premium pour accéder aux documents"
        )

    return render_template("lois.html")

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

try:
    cursor.execute("""
    ALTER TABLE users
    ADD COLUMN subscription TEXT DEFAULT 'free'
    """)
except:
    pass

try:
    cursor.execute("""
    ALTER TABLE users
    ADD COLUMN plan TEXT DEFAULT ''
    """)
except:
    pass

conn.commit()
conn.close()

from flask import jsonify
import sqlite3

@app.route("/finance-data")
def finance_data():

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("SELECT COUNT(*) FROM users")
    users = cursor.fetchone()[0]

    cursor.execute("""
    SELECT COUNT(*)
    FROM users
    WHERE role='Agriculteur'
    """)
    farmers = cursor.fetchone()[0]

    cursor.execute("""
    SELECT COUNT(*)
    FROM users
    WHERE role='Investisseur National'
    """)
    national = cursor.fetchone()[0]

    cursor.execute("""
    SELECT COUNT(*)
    FROM users
    WHERE role='Investisseur Étranger'
    """)
    foreign = cursor.fetchone()[0]

    cursor.execute("""
    SELECT COUNT(*)
    FROM users
    WHERE subscription='premium'
    """)
    premium = cursor.fetchone()[0]

    cursor.execute("""
    SELECT COUNT(*)
    FROM users
    WHERE plan='1mois'
    """)
    month1 = cursor.fetchone()[0]

    cursor.execute("""
    SELECT COUNT(*)
    FROM users
    WHERE plan='12mois'
    """)
    month12 = cursor.fetchone()[0]

    revenu_1mois = month1 * 1500
    revenu_12mois = month12 * 18000

    total_revenu = revenu_1mois + revenu_12mois

    conn.close()

    return jsonify({
        "users": users,
        "farmers": farmers,
        "national": national,
        "foreign": foreign,
        "premium": premium,
        "month1": month1,
        "month12": month12,
        "revenu1": revenu_1mois,
        "revenu12": revenu_12mois,
        "revenu": total_revenu
    })

@app.route("/pay/<plan>")
def pay(plan):

    if "email" not in session:
        return redirect("/")

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    cursor.execute("""
    UPDATE users
    SET subscription='premium',
        plan=?
    WHERE email=?
    """, (plan, session["email"]))

    conn.commit()
    conn.close()

    session["subscription"] = "premium"
    session["plan"] = plan

    return redirect("/dashboard")

from flask import send_from_directory

@app.route("/pdf/lois_agricoles")
def pdf_lois_agricoles():

    print("USER =", session.get("user"))
    print("SUBSCRIPTION =", session.get("subscription"))

    if "user" not in session:
        return "Utilisateur non connecté"

    if session.get("subscription") != "premium":
        return "Compte non premium"

    return send_from_directory(
        "static/docs",
        "lois_agricoles.pdf"
    )
@app.route("/pdf/maladies")
def pdf_maladies():

    if "user" not in session:
        return redirect("/")

    if session.get("subscription") != "premium":
        return redirect("/dashboard")

    return send_from_directory(
        "static/docs",
        "maladies.pdf"
    )

@app.route("/pdf/traitements")
def pdf_traitements():

    print("USER =", session.get("user"))
    print("SUBSCRIPTION =", session.get("subscription"))

    if "user" not in session:
        return "Utilisateur non connecté"

    if session.get("subscription") != "premium":
        return "Compte non premium"

    return send_from_directory(
        "static/docs",
        "traitements.pdf"
    )
    
@app.route("/forgot-password")
def forgot_password():
    return render_template("forgot_password.html")

@app.route("/reset-password", methods=["POST"])
def reset_password():

    email = request.form["email"]
    new_password = request.form["new_password"]

    conn = sqlite3.connect("database.db")
    cursor = conn.cursor()

    # vérifier si utilisateur existe
    cursor.execute("SELECT * FROM users WHERE email=?", (email,))
    user = cursor.fetchone()

    if not user:
        conn.close()
        return "❌ Email introuvable"

    # mise à jour du mot de passe
    cursor.execute("""
        UPDATE users
        SET password=?
        WHERE email=?
    """, (new_password, email))

    conn.commit()
    conn.close()

    return "✅ Mot de passe réinitialisé avec succès"

if __name__ == "__main__":
    app.run(debug=True)