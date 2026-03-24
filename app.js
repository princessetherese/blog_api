const express = require('express');
const dotenv = require('dotenv');
const articlesRoutes = require('./routes/articles');
const db = require('./config/db');

dotenv.config();
const app = express();
app.use(express.json());

// Swagger
require('./swagger')(app);

// Routes
app.use('/auth', require('./routes/auth'));
app.use('/articles', require('./routes/articles'));
app.use('/articles', articlesRoutes);

// Lancement serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur lancé sur http://localhost:${PORT}\nSwagger sur http://localhost:${PORT}/api-docs`));