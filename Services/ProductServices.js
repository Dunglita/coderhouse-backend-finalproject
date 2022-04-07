const productModel = require("../Domain/ProductModel.js");
const { products } = require("../Repositories/Index.js");

//Variabe de control para habilitar/deshabilitar rutas
const isAdmin = true;

module.exports = {
  getProduct: async (idProduct) => {
    if (idProduct == undefined || idProduct == null) {
      try {
        const productos = await products.getAllProducts();
        return productos;
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
