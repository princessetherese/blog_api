const express = require("express");
const router = express.Router();
const controller = require("../controllers/articleController");
const authMiddleware = require("../middleware/authMiddleware");

router.post("/articles", authMiddleware, controller.create);
router.put("/articles/:id", authMiddleware, controller.update);
router.delete("/articles/:id", authMiddleware, controller.delete);

/**
 * @swagger
 * tags:
 *   name: Articles
 *   description: API de gestion des articles
 */

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Créer un nouvel article
 *     tags: [Articles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Article'
 *     responses:
 *       201:
 *         description: Article créé avec succès
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */
router.post("/articles", controller.create);

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Récupérer tous les articles
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: Liste des articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 */
router.get("/articles", controller.getAll);

/**
 * @swagger
 * /articles/{id}:
 *   get:
 *     summary: Récupérer un article par ID
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID de l'article
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article trouvé
 *       404:
 *         description: Article non trouvé
 */
router.get("/articles/:id", controller.getOne);

/**
 * @swagger
 * /articles/{id}:
 *   put:
 *     summary: Modifier un article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article modifié
 *       404:
 *         description: Article non trouvé
 */
router.put("/articles/:id", controller.update);

/**
 * @swagger
 * /articles/{id}:
 *   delete:
 *     summary: Supprimer un article
 *     tags: [Articles]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Article supprimé
 *       404:
 *         description: Article non trouvé
 */
router.delete("/articles/:id", controller.delete);

/**
 * @swagger
 * /articles/search:
 *   get:
 *     summary: Rechercher des articles
 *     tags: [Articles]
 *     parameters:
 *       - in: query
 *         name: query
 *         required: true
 *         description: Texte à rechercher
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Résultat de la recherche
 */
router.get("/articles/search", controller.search);

module.exports = router;