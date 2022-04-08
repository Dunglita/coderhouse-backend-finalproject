const connection = require("./ConnectionDB.js");

//Get cart
function getCartProducts(idCart) {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM PRODUCTO WHERE idProducto IN (SELECT idProducto FROM PRODUCTO_CARRITO WHERE idCarrito =  + ${idCart}) `;

    connection.query(sql, (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
}

// Create cart
function createCart(data) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO CARRITO (idCarrito, timestamp) VALUES(?, ?)`;
    const idCarrito = "NULL";
    const timestamp = new Date();

    connection.query(sql, [idCarrito, timestamp], (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
}

// Add cart product
function addCartProduct(data) {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO PRODUCTO_CARRITO (idProducto_Carrito, idCarrito, idProducto) VALUES(?, ?, ?)`;
    const idProducto_Carrito = "NULL";
    const idCarrito = data.idCarrito;
    const idProducto = data.idProducto;

    connection.query(
      sql,
      [idProducto_Carrito, idCarrito, idProducto],
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

//Delete cart
function deleteCart(idCart) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM CARRITO WHERE idCarrito=` + idCart;

    connection.query(sql, [idCart], (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
}

//Delete cart product
function deleteCartProduct(idCart) {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM PRODUCTO_CARRITO WHERE idCarrito=` + idCart;
    connection.query(sql, [idCart], (error, result) => {
      if (error) {
        return reject(error);
      } else {
        return resolve(result);
      }
    });
  });
}

module.exports = {
  getCartProducts: getCartProducts,
  createCart: createCart,
  addCartProduct: addCartProduct,
  deleteCart: deleteCart,
  deleteCartProduct: deleteCartProduct,
};
