const cartModel = require("../Domain/CartModel.js");
const cartRepository = require("../Repositories/CartRepository.js");

module.exports = {
  getCart: async (idCart) => {
    try {
      const cart = await cartRepository.getCart(idCart);
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createCart: async (data) => {
    try {
      const newCart = await cartRepository.createCart(data);
      return newCart;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  addCartProduct: async (data) => {
    try {
      const newCart = await cartRepository.addCartProduct(data);
      return newCart;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteCart: async (idCart) => {
    try {
      const cart = await cartRepository.deleteCart(idCart);
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteCartProduct: async (idCart) => {
    try {
      const cart = await cartRepository.deleteCartProduct(idCart);
      return cart;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
