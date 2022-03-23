const express = require(`express`);
const cors = require("cors");
const compression = require("compression");
const controllers = require("../../Controllers/Index.js"); //FIXME:Ver __dirname
const productControllers = controllers.product;

function productRoutes() {
  const productRouter = express();
  productRouter
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression());

  productRouter
    .get("/product:id", productControllers.getProduct)
    .post("/newProduct", productControllers.createProduct)
    .put("/product:id", productControllers.updateProduct)
    .delete("/product:id", productControllers.deleteProduct);

  return productRouter;
}
module.exports = productRoutes;
