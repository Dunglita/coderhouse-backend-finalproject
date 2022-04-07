const { products } = require("../Services/Index.js");

module.exports = {
  //Search product
  getProduct: async (req, res) => {
    const idProduct = req.params.id;
    try {
      const product = await products.getProduct(idProduct);
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
    const data = {
      id: NULL,
      timestamp: NULL,
      nombre: req.params.nombre,
      descripcion: req.body.descripcion,
      codigo: req.body.codigo,
      url: req.params.url,
      precio: req.params.precio,
      stock: req.body.stock,
    };
    try {
      const product = await products.createProduct(data);
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
    const data = {
      id: req.params.id,
      timestamp: NULL,
      nombre: req.params.nombre,
      descripcion: req.body.descripcion,
      codigo: req.body.codigo,
      url: req.params.url,
      precio: req.params.precio,
      stock: req.body.stock,
    };
    try {
      const product = await products.updateProduct(data);
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
    const idProduct = req.params.id;
    try {
      const product = await products.deleteProduct(idProduct);
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
