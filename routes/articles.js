const express = require('express');
const router = express.Router();
const db = require('../config/db');
const authMiddleware = require('../middleware/authMiddleware');


// ✅ GET un article par ID
router.get('/:id', (req, res) => {
  const articleId = req.params.id;

  const sql = "SELECT * FROM articles WHERE id = ?";

  db.query(sql, [articleId], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur serveur', error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }

    res.json(results[0]);
  });
});


// ✅ UPDATE un article
router.put('/:id', authMiddleware, (req, res) => {
  const articleId = req.params.id;
  const { title, content, category } = req.body;

  const sql = `
    UPDATE articles
    SET title = ?, content = ?, category = ?
    WHERE id = ?
  `;

  db.query(sql, [title, content, category, articleId], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Erreur serveur', error: err });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Article non trouvé' });
    }

    res.json({ message: 'Article mis à jour' });
  });
});


// ✅ EXPORT à la fin seulement
module.exports = router;