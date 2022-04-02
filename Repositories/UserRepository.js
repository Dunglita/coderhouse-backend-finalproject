const connection = require("./MySQL/ConnectionDB.js");

//Get user
function getUser(idUser) {
  const sql = `SELECT * FROM USER WHERE idUser = ` + idUser;
  connection.query(sql, (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      console.log(result);
      return result;
    }
  });
}
// Create user
function createUser(data) {
  const sql = `INSERT INTO user(user, password) VALUES(?, ?)`;
  const user = data.user;
  const password = data.password;

  connection.query(sql, [user, password], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}

//Update user
function updateUser(data) {
  const sql = `UPDATE USER SET user=?, password=?  WHERE idUser=` + data.idUser;

  const user = data.user;
  const password = data.password;

  connection.query(sql, [user, password], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return result;
    }
  });
}

//Delete user
function deleteUser(idUser) {
  //Call other tables delete function

  const sql = `DELETE FROM USER WHERE idUser=` + idUser;

  connection.query(sql, [idUser], (error, result) => {
    if (error) {
      throw new Error(error);
    } else {
      return "User deleted successfully";
    }
  });
}
module.exports = {
  getUser: getUser,
  createUser: createUser,
  updateUser: updateUser,
  deleteUser: deleteUser,
};
