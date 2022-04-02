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
    .get("/product:id", productControllers.getProduct(req.body.id))
    .post("/", productControllers.createProduct(req.body))
    .put("/product:id", productControllers.updateProduct(req.body))
    .delete("/product:id", productControllers.deleteProduct(req.body.id));

  return productRouter;
}
module.exports = productRoutes;
