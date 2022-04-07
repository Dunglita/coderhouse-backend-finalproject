const productModel = require("../Domain/ProductModel.js");
const { products } = require("../Repositories/Index.js");

//Variabe de control para habilitar/deshabilitar rutas
const isAdmin = true;

module.exports = {
  getProduct: async (idProduct) => {
    if (idProduct == undefined || idProduct == null) {
      try {
        const items = await products.getAllProducts();
        return items;
      } catch (error) {
        throw new Error(error.message);
      }
    }

    try {
      const item = products.getProduct(idProduct);
      return item;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  createProduct: async (data) => {
    try {
      const newProduct = products.createProduct(data);
      return newProduct;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  updateProduct: async (data) => {
    try {
      const product = products.updateProduct(data);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteProduct: async (idProduct) => {
    try {
      const product = products.deleteProduct(idProduct);
      return product;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
