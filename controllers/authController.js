const User = require("../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// REGISTER
exports.register = (req, res) => {
  const { nom, email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Champs requis" });
  }

  const hashedPassword = bcrypt.hashSync(password, 8);

  User.createUser(
    { nom, email, password: hashedPassword },
    (err, result) => {
      if (err) return res.status(500).json(err);
      res.status(201).json({ message: "Utilisateur créé" });
    }
  );
};

// LOGIN
exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByEmail(email, (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0)
      return res.status(404).json({ message: "Utilisateur non trouvé" });

    const user = results[0];

    const isValid = bcrypt.compareSync(password, user.password);

    if (!isValid)
      return res.status(401).json({ message: "Mot de passe incorrect" });

    const token = jwt.sign({ id: user.id }, "SECRET_KEY", {
      expiresIn: "1h",
    });

    res.json({ token });
  });
};