const { products } = require("../Services/Index.js");

module.exports = {
  //Search product
  getProduct: async (req, res) => {
    const idProduct = req.params.id;
    try {
      const product = await products.getProduct(idProduct);
      return res.status(200).json({
        data: product,
        message: "Product found succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Create product
  createProduct: async (req, res) => {
    try {
      const product = await products.createProduct(req.query);
      return res.status(201).json({
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
      idProducto: req.params.id,
      nombre: req.query.nombre,
      codigo: req.query.codigo,
      descripcion: req.query.descripcion,
      url: req.query.url,
      precio: req.query.precio,
      stock: req.query.stock,
    };
    console.log(data);
    try {
      const product = await products.updateProduct(data);
      return res.status(200).json({
        data: product,
        message: "Product updated succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete product
  deleteProduct: async (req, res) => {
    try {
      const product = await products.deleteProduct(req.params.id);
      return res.status(200).json({
        data: product,
        message: "Product deleted succesfully",
      });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
