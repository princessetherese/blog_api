require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

//swagger route
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerSpec, {
    explorer: true,
  })
);

// routes
const articleRoutes = require("./routes/articleRoutes");
app.use("/api", articleRoutes);

// serveur
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Serveur lancé sur http://localhost:${PORT}`);
   console.log(`Swagger sur http://localhost:${PORT}/api-docs`);

});