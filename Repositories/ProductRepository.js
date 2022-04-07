const connection = require("./ConnectionDB.js");
//Get all the products
function getAllProducts() {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM PRODUCTO`;
    connection.query(sql, (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
}

//Get product
async function getProduct(idProduct) {
  const sql = `SELECT * FROM USER WHERE idProduct = ` + idProduct;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log(result);
      return result;
    }
  });
}

// Create product
async function createProduct(data) {
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
async function updateProduct(data) {
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
async function deleteProduct(idProduct) {
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
