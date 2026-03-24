const mysql = require('mysql2');

// Configuration de la connexion MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'armelle',       // ton utilisateur MySQL
    password: 'Armelle@123', // ton mot de passe MySQL
    database: 'blog_db' // le nom de ta base de données
});

// Connexion à MySQL
db.connect((err) => {
    if (err) {
        console.error('Erreur de connexion à MySQL :', err.message);
        return;
    }
    console.log('Connecté à la base de données MySQL.');
});

module.exports = db;