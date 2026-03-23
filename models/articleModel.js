const db = require("../config/db");

// Créer article
exports.createArticle = (data, callback) => {
  const sql = "INSERT INTO articles SET ?";
  db.query(sql, data, callback);
};

// Obtenir tous les articles
exports.getAllArticles = (callback) => {
  db.query("SELECT * FROM articles", callback);
};

// Obtenir un article par ID
exports.getArticleById = (id, callback) => {
  db.query("SELECT * FROM articles WHERE id = ?", [id], callback);
};

// Modifier article
exports.updateArticle = (id, data, callback) => {
  db.query("UPDATE articles SET ? WHERE id = ?", [data, id], callback);
};

// Supprimer article
exports.deleteArticle = (id, callback) => {
  db.query("DELETE FROM articles WHERE id = ?", [id], callback);
};

// Rechercher article
exports.searchArticles = (query, callback) => {
  const sql = "SELECT * FROM articles WHERE titre LIKE ? OR contenu LIKE ?";
  db.query(sql, [`%${query}%`, `%${query}%`], callback);
};