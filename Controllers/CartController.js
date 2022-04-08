const { carts } = require("../Services/Index.js");

module.exports = {
  //Search cart
  getCartProducts: async (req, res) => {
    const idCart = req.params.id;
    try {
      const cart = await carts.getCartProducts(idCart);
      return res.status(200).json({
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
      timestamp: new Date(),
      //FIXME: Solo se le puede agregar un producto al carrito
    };

    try {
      const cart = await carts.createCart(data);
      return res.status(201).json({
        data: cart,
        message: "Cart created succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Add  product to cart
  addCartProduct: async (req, res) => {
    try {
      const cart = await carts.addCartProduct(data);
      return res.status(201).json({
        data: cart,
        message: "Product added to cart succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete cart
  deleteCart: async (req, res) => {
    try {
      const cart = await carts.deleteCart(req.idCart);
      return res.status(200).json({
        data: cart,
        message: "Cart deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete product from cart
  deleteCartProduct: async (req, res) => {
    try {
      const cart = await carts.deleteCartProduct(req.idProduct);
      return res.status(200).json({
        data: cart,
        message: "Cart deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
