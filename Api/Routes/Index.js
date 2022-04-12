const express = require(`express`);
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");
const productRoutes = require("./Product.routes.js");
const cartRoutes = require("./Cart.routes.js");
const router = express();

const isAdmin = true;

function getRoutes(app) {
  app
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression())
    .use(express.static("public"))
    .use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

  app.use("/api/productos", productRoutes(router));
  app.use("/api/carrito", cartRoutes(router));

  app.get("*", (req, res) => {
    res.json({
      error: "-2",
      descripcion: "Ruta no implementada",
    });
  });
}
module.exports = getRoutes;
