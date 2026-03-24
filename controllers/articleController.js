const Article = require("../models/articleModel");

// CREATE
exports.create = (req, res) => {
  const data = req.body;

  if (!data.titre || !data.contenu || !data.auteur) {
    return res.status(400).json({ message: "Champs obligatoires manquants" });
  }

  Article.createArticle(data, (err, result) => {
    if (err) return res.status(500).json(err);
    res.status(201).json({ message: "Article créé", id: result.insertId });
  });
};

// GET ALL
exports.getAll = (req, res) => {
  let { page, limit } = req.query;

  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;

  const offset = (page - 1) * limit;

  const sql = "SELECT * FROM articles LIMIT ? OFFSET ?";

  const db = require("../config/db");

  db.query(sql, [limit, offset], (err, results) => {
    if (err) return res.status(500).json(err);

    res.json({
      page,
      limit,
      data: results,
    });
  });
};
// GET ONE
exports.getOne = (req, res) => {
  const id = req.params.id;

  Article.getArticleById(id, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: "Article non trouvé" });

    res.json(results[0]);
  });
};

// UPDATE
exports.update = (req, res) => {
  const id = req.params.id;

  Article.updateArticle(id, req.body, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article modifié" });
  });
};

// DELETE
exports.delete = (req, res) => {
  const id = req.params.id;

  Article.deleteArticle(id, (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Article supprimé" });
  });
};

// SEARCH
exports.search = (req, res) => {
  const query = req.query.query;

  Article.searchArticles(query, (err, results) => {
    if (err) return res.status(500).json(err);
    res.json(results);
  });
};