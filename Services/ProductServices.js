const productModel = require("../Domain/ProductModel.js");
const productRepository = require("../Repositories/ProductRepository.js");

//Variabe de control para habilitar/deshabilitar rutas
const isAdmin = true;

module.exports = {
  getProduct: async (idProduct) => {
    //TODO: Ver si vale la pena poner un control extra de isNaN
    if (idProduct == undefined || idProduct == null) {
      try {
        const product = productRepository.getAllProducts();
        console.log(product);
        return product;
      } catch (error) {
        throw new Error(error.message);
      }
    }
    try {
      const product = productRepository.getProduct(idProduct);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  createProduct: async (data) => {
    try {
      const newProduct = productRepository.createProduct(data);
      return newProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateProduct: async (data) => {
    try {
      const product = productRepository.updateProduct(data);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteProduct: async (idProduct) => {
    try {
      const product = productRepository.deleteProduct(idProduct);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
