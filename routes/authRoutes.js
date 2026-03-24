const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db'); // ton fichier de connexion MySQL

// Inscription
router.post('/signup', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  db.query('INSERT INTO users (username, password) VALUES (?, ?)', [username, hashedPassword], (err, result) => {
    if (err) return res.status(500).json(err);
    res.json({ message: 'Utilisateur créé !' });
  });
});

// Login
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.query('SELECT * FROM users WHERE username = ?', [username], async (err, users) => {
    if (err || users.length === 0) return res.status(400).json({ message: 'Utilisateur non trouvé' });
    const match = await bcrypt.compare(password, users[0].password);
    if (!match) return res.status(400).json({ message: 'Mot de passe incorrect' });

    const token = jwt.sign({ id: users[0].id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Connecté !', token });
  });
});

module.exports = router;