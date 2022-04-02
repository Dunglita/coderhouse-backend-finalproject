const cartServices = require("../Services/CartServices.js");
module.exports = {
  //Search cart
  getCart: async (req, res) => {
    //const idCart = req.params.idCart;
    const idCart = 1;
    try {
      const cart = await cartServices.getCart(idCart);
      return res.status(200).json({
        status: 200,
        data: cart,
        message: "Cart found succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Create cart
  createCart: async (req, res) => {
    //letdata = {cart: "req.body.cart", password: "req.body.password",};
    let data = { cart: "dani", password: "ensolvers" };
    try {
      const cart = await cartServices.createCart(data);
      return res.status(201).json({
        status: 201,
        data: cart,
        message: "Cart created succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Add cart product
  addCartProduct: async (req, res) => {
    //letdata = {cart: "req.body.cart", password: "req.body.password",};
    let data = { cart: "dani", password: "ensolvers" };
    try {
      const cart = await cartServices.addCartProduct(data);
      return res.status(201).json({
        status: 201,
        data: cart,
        message: "Cart created succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete cart
  deleteCart: async (req, res) => {
    // idCart = req.params.idCart;
    const idCart = 1;
    try {
      const cart = await cartServices.deleteCart(idCart);
      return res.status(200).json({
        status: 200,
        data: cart,
        message: "Cart deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete cart
  deleteCartProduct: async (req, res) => {
    // idCart = req.params.idCart;
    const idCart = 1;
    try {
      const cart = await cartServices.deleteCartProduct(idCart);
      return res.status(200).json({
        status: 200,
        data: cart,
        message: "Cart deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
