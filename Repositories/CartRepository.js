const connection = require("./ConnectionDB.js");

//Get cart
function getCart(idCart) {
  const sql = `SELECT * FROM USER WHERE idCart = ` + idCart;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log(result);
      return result;
    }
  });
}

// Create cart
function createCart(data) {
  const sql = `INSERT INTO cart(cart, password) VALUES(?, ?)`;
  const cart = data.cart;
  const password = data.password;

  connection.query(sql, [cart, password], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}

// Add cart product
function addCartProduct(data) {
  const sql = `INSERT INTO cart(cart, password) VALUES(?, ?)`;
  const cart = data.cart;
  const password = data.password;

  connection.query(sql, [cart, password], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}

//Delete cart
function deleteCart(idCart) {
  //Call other tables delete function

  const sql = `DELETE FROM USER WHERE idCart=` + idCart;

  connection.query(sql, [idCart], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return "Cart deleted successfully";
    }
  });
}

//Delete cart product
function deleteCartProduct(idCart) {
  //Call other tables delete function

  const sql = `DELETE FROM USER WHERE idCart=` + idCart;

  connection.query(sql, [idCart], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return "Cart deleted successfully";
    }
  });
}

module.exports = {
  getCart: getCart,
  createCart: createCart,
  addCartProduct: addCartProduct,
  deleteCart: deleteCart,
  deleteCartProduct: deleteCartProduct,
};
