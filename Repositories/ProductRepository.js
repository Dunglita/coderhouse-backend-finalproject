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
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM PRODUCTO WHERE idProducto = ` + idProduct;
    connection.query(sql, (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
}

// Create product
async function createProduct(data) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO PRODUCTO(idProducto, timestamp, nombre, descripcion, codigo, url, precio, stock) VALUES(?, ?, ?, ?, ?, ?, ?, ?)`;
    const idProducto = "NULL";
    const timestamp = new Date();
    const nombre = data.nombre;
    const descripcion = data.descripcion;
    const codigo = data.codigo;
    const url = data.url;
    const precio = data.precio;
    const stock = data.stock;

    connection.query(
      sql,
      [idProducto, timestamp, nombre, descripcion, codigo, url, precio, stock],
      (error, result) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(result);
        }
      }
    );
  });
}

//Update product
async function updateProduct(data) {
  console.log(data);
  return new Promise((resolve, reject) => {
    const sql =
      `UPDATE PRODUCTO SET idProducto=?, timestamp=?, nombre=?, descripcion=?, codigo=?, url=?, precio=?, stock=?  WHERE idProducto=` +
      data.idProducto;

    const idProducto = data.idProducto;
    const timestamp = new Date();
    const nombre = data.nombre;
    const descripcion = data.descripcion;
    const codigo = data.codigo;
    const url = data.url;
    const precio = data.precio;
    const stock = data.stock;

    connection.query(
      sql,
      [idProducto, timestamp, nombre, descripcion, codigo, url, precio, stock],
      (error, result) => {
        if (error) {
          return reject(error);
        } else {
          return resolve(result);
        }
      }
    );
  });
}

//Delete product
async function deleteProduct(idProduct) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM PRODUCTO WHERE idProducto=` + idProduct;
    connection.query(sql, [idProduct], (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
}
module.exports = {
  getAllProducts: getAllProducts,
  getProduct: getProduct,
  createProduct: createProduct,
  updateProduct: updateProduct,
  deleteProduct: deleteProduct,
};
