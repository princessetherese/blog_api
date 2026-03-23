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
  let { page, limit, categorie, date } = req.query;

  page = parseInt(page) || 1;
  limit = parseInt(limit) || 5;

  const offset = (page - 1) * limit;

  let sql = "SELECT * FROM articles WHERE 1=1";
  let params = [];

  if (categorie) {
    sql += " AND categorie = ?";
    params.push(categorie);
  }

  if (date) {
    sql += " AND DATE(date_creation) = ?";
    params.push(date);
  }

  sql += " LIMIT ? OFFSET ?";
  params.push(limit, offset);

  const db = require("../config/db");

  db.query(sql, params, (err, results) => {
    if (err) return res.status(500).json(err);

    res.json({
      page,
      limit,
      filters: { categorie, date },
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