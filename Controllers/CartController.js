const { carts } = require("../Services/Index.js");

module.exports = {
  //Search cart
  getCart: async (req, res) => {
    const idCart = req.params.id;
    try {
      const cart = await carts.getCart(idCart);
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
    const data = {
      id: NULL,
      timestamp: NULL,
      //FIXME:ver relacion 1-n o m-n en base de datos
    };
    try {
      const cart = await carts.createCart(data);
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
    try {
      const cart = await carts.addCartProduct(data);
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
    try {
      const cart = await carts.deleteCart(idCart);
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
    try {
      const cart = await carts.deleteCartProduct(idCart);
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
