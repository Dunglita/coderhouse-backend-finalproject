const express = require(`express`);
const cors = require("cors");
const compression = require("compression");

const { cart } = require("../../Controllers/Index.js"); //FIXME:Ver __dirname

function cartRoutes() {
  const cartRouter = express();
  cartRouter
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression());

  cartRouter
    .get("/:id/productos", cart.getCartProducts) //Carrito actual
    .post("/", cart.createCart)
    .post("/:id/products", cart.addCartProduct)
    .delete("/:id", cart.deleteCart)
    .delete("/:id/productos/:id_prod", cart.deleteCartProduct);

  return cartRouter;
}
module.exports = cartRoutes;
