const express = require(`express`);
const cors = require("cors");
const bodyParser = require("body-parser");
const compression = require("compression");

const { product } = require("../../Controllers/Index.js"); //FIXME:Ver __dirname

function productRoutes(router) {
  const productRouter = router;

  productRouter
    .use(express.json())
    .use(cors({ credentials: true }))
    .use(compression())
    .use(
      bodyParser.urlencoded({
        extended: true,
      })
    );

  productRouter
    .get("/", product.getProduct)
    .get("/:id", product.getProduct)
    .post("/", product.createProduct)
    .put("/:id", product.updateProduct)
    .delete("/:id", product.deleteProduct);

  return productRouter;
}
module.exports = productRoutes;
