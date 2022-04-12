const connection = require("./ConnectionDB.js");

//Get cart
//FIXME: No tiene en cuenta la cantidad del mismo producto que hay en el carrito
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
    const sql = `INSERT INTO PRODUCTO_CARRITO (idProductoCarrito, idCarrito, idProducto) VALUES(?, ?, ?)`;
    const idProductoCarrito = "NULL";
    const idCarrito = data.idCarrito;
    const idProducto = data.idProducto;

    connection.query(
      sql,

      [idProductoCarrito, idCarrito, idProducto],
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

//Delete Cart Relationships
function deleteCartRelationships(idCart) {
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

//Delete cart product
function deleteCartProduct(data) {
  return new Promise((resolve, reject) => {
    const idCarrito = data.idCarrito;
    const idProduct = data.idProducto;
    const sql =
      `DELETE FROM PRODUCTO_CARRITO WHERE idCarrito=` +
      idCarrito +
      ` AND idProducto =` +
      idProduct;
    connection.query(sql, [idCarrito, idProduct], (error, result) => {
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
  deleteCartRelationships: deleteCartRelationships,
  deleteCartProduct: deleteCartProduct,
};
