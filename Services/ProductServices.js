const productModel = require("../Domain/ProductModel.js");
const productRepository = require("../Repositories/ProductRepository.js");

module.exports = {
  getProduct: async (idProduct) => {
    try {
      const product = await productRepository.getProduct(idProduct);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createProduct: async (data) => {
    try {
      const newProduct = await productRepository.createProduct(data);
      return newProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateProduct: async (data) => {
    try {
      const product = await productRepository.updateProduct(data);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteProduct: async (idProduct) => {
    try {
      const product = await productRepository.deleteProduct(idProduct);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
