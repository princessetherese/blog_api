# 📌 API Blog - Backend Node.js (INF222)

## 👤 Auteur

* Nom : Armelle Akamba
* UE : INF222 – Développement Backend

---

# 📖 Description du projet

Cette application est une **API Backend de gestion de blog** développée avec Node.js et Express.

Elle permet de :

* Créer des articles
* Lire tous les articles
* Lire un article spécifique
* Modifier un article
* Supprimer un article
* Rechercher des articles
* Sécuriser certaines routes avec JWT

---

# 🚀 Technologies utilisées

* Node.js
* Express.js
* SQLite3 (ou MySQL selon ton cas)
* JWT (jsonwebtoken)
* bcryptjs (sécurité mot de passe)
* Swagger (documentation API)
* Postman (test API)

---

# 📂 Structure du projet

```bash
mon_projet_backend/
│
├── app.js                # Fichier principal
├── db.js / db/           # Connexion base de données
├── routes/
│   ├── articles.js       # Routes articles
│   └── auth.js           # Routes authentification
├── middleware/
│   └── auth.js           # Vérification JWT
├── node_modules/
├── package.json
├── .gitignore
└── README.md
```

---

# ⚙️ Installation du projet

## 1. Cloner le projet

```bash
git clone https://github.com/ton-username/blog-api.git
cd blog-api
```

## 2. Installer les dépendances

```bash
npm install
```

---

# ▶️ Lancer le serveur

```bash
node app.js
```

Serveur accessible sur :

```bash
http://localhost:3000
```

---

# 📌 Documentation Swagger

Swagger permet de tester les endpoints directement.

👉 Accès :

```bash
http://localhost:3000/api-docs
```

---

# 📌 Endpoints API

## 🔹 Authentification

### Inscription

POST /api/auth/register

```json
{
  "username": "armelle",
  "password": "123456"
}
```

---

### Connexion

POST /api/auth/login

👉 Retourne un token JWT

---

## 🔹 Articles

### ✔ Créer un article (protégé)

POST /api/articles

Headers :

```
Authorization: TOKEN
```

Body :

```json
{
  "titre": "Mon article",
  "contenu": "Contenu...",
  "auteur": "Armelle",
  "date": "2026-03-24",
  "categorie": "Tech",
  "tags": "node,api"
}
```

---

### ✔ Lire tous les articles

GET /api/articles

---

### ✔ Lire un article

GET /api/articles/{id}

---

### ✔ Modifier un article

PUT /api/articles/{id}

---

### ✔ Supprimer un article

DELETE /api/articles/{id}

---

### ✔ Rechercher un article

GET /api/articles/search?query=texte

---

### ✔ Filtrer (optionnel)

GET /api/articles?categorie=Tech&date=2026-03-24

---

# 🔐 Sécurité

* Authentification avec JWT
* Mots de passe hashés avec bcrypt
* Middleware pour protéger les routes

---

# ✅ Bonnes pratiques utilisées

* Architecture modulaire (routes, middleware, db)
* Codes HTTP respectés :

  * 200 OK
  * 201 Created
  * 400 Bad Request
  * 404 Not Found
  * 500 Internal Server Error
* Validation des données

---

# 🧪 Test de l’API

L’API a été testée avec :

* Postman
* Swagger UI

---

# 🔗 Dépôt GitHub

👉 Ajouter ici ton lien :

```bash
https://github.com/ton-username/blog-api
```

---

# 🌐 Déploiement (optionnel)

L’application peut être déployée sur :

* Render
* Railway

---

# 📌 Conclusion

Ce projet a permis de :

* Comprendre le développement backend avec Node.js
* Créer une API REST complète
* Utiliser Swagger pour documenter une API
* Implémenter une authentification sécurisée avec JWT

---

# 📷 Captures d’écran

👉 Ajouter ici :

* Swagger
* Postman
* Code VS Code
* Résultats API
