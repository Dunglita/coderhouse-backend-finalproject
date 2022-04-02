const productServices = require("../Services/ProductServices.js");

//Variabe de control para habilitar/deshabilitar rutas
const isAdmin = true;

module.exports = {
  //Search product
  getProduct: async (req, res) => {
    //const idProduct = req.params.idProduct;
    const idProduct = 1;
    try {
      const product = await productServices.getProduct(idProduct);
      return res.status(200).json({
        status: 200,
        data: product,
        message: "Product found succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Create product
  createProduct: async (req, res) => {
    //letdata = {product: "req.body.product", password: "req.body.password",};
    let data = { product: "dani", password: "ensolvers" };
    try {
      const product = await productServices.createProduct(data);
      return res.status(201).json({
        status: 201,
        data: product,
        message: "Product created succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Update product
  updateProduct: async (req, res) => {
    // let data = req.params.data;
    let data = { idProduct: "1", product: "dani", password: "ensolvers" };
    try {
      const product = await productServices.updateProduct(data);
      return res.status(200).json({
        status: 200,
        data: product,
        message: "Product updated succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete product
  deleteProduct: async (req, res) => {
    // idProduct = req.params.idProduct;
    const idProduct = 1;
    try {
      const product = await productServices.deleteProduct(idProduct);
      return res.status(200).json({
        status: 200,
        data: product,
        message: "Product deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
