const connection = require("./ConnectionDB.js");

//Get product
function getProduct(idProduct) {
  const sql = `SELECT * FROM USER WHERE idProduct = ` + idProduct;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log(result);
    }
  });
}

//Get all the products
function getAllProducts() {
  const sql = `SELECT * FROM PRODUCTO`;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}

// Create product
function createProduct(data) {
  const sql = `INSERT INTO PRODUCTS(product, password) VALUES(?, ?)`;
  const product = data.product;
  const password = data.password;

  connection.query(sql, [product, password], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}

//Update product
function updateProduct(data) {
  const sql =
    `UPDATE USER SET product=?, password=?  WHERE idProduct=` + data.idProduct;

  const product = data.product;
  const password = data.password;

  connection.query(sql, [product, password], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}

//Delete product
function deleteProduct(idProduct) {
  //Call other tables delete function

  const sql = `DELETE FROM USER WHERE idProduct=` + idProduct;

  connection.query(sql, [idProduct], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return "Product deleted successfully";
    }
  });
}
module.exports = {
  getAllProducts: getAllProducts,
  getProduct: getProduct,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
