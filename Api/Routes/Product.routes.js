const express = require(`express`);
const cors = require("cors");
const compression = require("compression");

const { product } = require("../../Controllers/Index.js"); //FIXME:Ver __dirname

function productRoutes() {
  const productRouter = express();
  productRouter
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression());

  productRouter
    .get("/:id", product.getProduct(req.body.id))
    .post("/", product.createProduct(req.body))
    .put("/:id", product.updateProduct(req.body))
    .delete("/:id", product.deleteProduct(req.body.id));

  return productRouter;
}
module.exports = productRoutes;
