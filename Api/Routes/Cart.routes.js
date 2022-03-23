const express = require(`express`);
const cors = require("cors");
const compression = require("compression");
const controllers = require("../../Controllers/Index.js"); //FIXME:Ver __dirname
const cartControllers = controllers.cart;

function productRoutes() {
  const productRouter = express();
  productRouter
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression());

  productRouter
    .get("/cart:id", cartControllers.getCart)
    .post("/newCart", cartControllers.createCart)
    .put("/cart:id", cartControllers.updateCart)
    .delete("/cart:id", cartControllers.deleteCart);

  return productRouter;
}
module.exports = productRoutes;
