const express = require(`express`);
const cors = require("cors");
const compression = require("compression");
const productRoutes = require("./Product.routes.js");
const cartRoutes = require("./Cart.routes.js");

function getRoutes(app) {
  app
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression())
    .use(express.static("public"));

  app.use("/api/productos", productRoutes);
  app.use("/api/carrito", cartRoutes);
}
module.exports = getRoutes;
