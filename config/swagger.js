const swaggerJsdoc = require("swagger-jsdoc");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Blog - INF222",
      version: "1.0.0",
      description: "API backend pour la gestion des articles d’un blog",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
    components: {
      schemas: {
        Article: {
          type: "object",
          required: ["titre", "contenu", "auteur"],
          properties: {
            id: {
              type: "integer",
              example: 1,
            },
            titre: {
              type: "string",
              example: "Mon premier article",
            },
            contenu: {
              type: "string",
              example: "Ceci est le contenu de l'article",
            },
            auteur: {
              type: "string",
              example: "Armelle",
            },
            categorie: {
              type: "string",
              example: "Tech",
            },
            tags: {
              type: "string",
              example: "nodejs,api",
            },
            date_creation: {
              type: "string",
              example: "2026-03-23",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;