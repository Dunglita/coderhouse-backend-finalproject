const { carts } = require("../Repositories/Index.js");

module.exports = {
  getCartProducts: async (idCart) => {
    try {
      const cart = await carts.getCartProducts(idCart);
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  createCart: async (data) => {
    try {
      const newCart = await carts.createCart(data);
      return newCart;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  addCartProduct: async (data) => {
    try {
      const newCart = await carts.addCartProduct(data);
      return newCart;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteCart: async (idCart) => {
    try {
      const cart = await carts.deleteCart(idCart);
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  },

  deleteCartProduct: async (idCart) => {
    try {
      const cart = await carts.deleteCartProduct(idCart);
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
