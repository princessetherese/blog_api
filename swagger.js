const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API Blog",
      version: "1.0.0",
      description: "API Blog avec JWT, pagination et filtres"
    },
    servers: [
      { url: "http://localhost:3000" }
    ],

    components: {
      schemas: {
        Article: {
          type: "object",
          required: ["title", "content"],
          properties: {
            id: {
              type: "integer",
              example: 1
            },
            title: {
              type: "string",
              example: "Mon premier article"
            },
            content: {
              type: "string",
              example: "Ceci est le contenu"
            },
            category: {
              type: "string",
              example: "Tech"
            },
            user_id: {
              type: "integer",
              example: 2
            },
            created_at: {
              type: "string",
              format: "date-time"
            }
          }
        }
      }, // ✅ très important (virgule ici)

      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT"
        }
      }
    }
  },

  apis: ["./routes/*.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = (app) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
};