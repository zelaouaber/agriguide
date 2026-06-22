import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("PRAGMA table_info(users)")

for col in cursor.fetchall():
    print(col)

conn.close()

import sqlite3

conn = sqlite3.connect("database.db")
cursor = conn.cursor()

cursor.execute("""
SELECT nom,
       prenom,
       role,
       email,
       subscription,
       plan
FROM users
""")

for row in cursor.fetchall():
    print(row)

conn.close()

