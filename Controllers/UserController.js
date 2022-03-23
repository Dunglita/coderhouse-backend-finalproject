const userServices = require("../Services/UserServices.js");
module.exports = {
  //Search user
  getUser: async (req, res) => {
    //const idUser = req.params.idUser;
    const idUser = 1;
    try {
      const user = await userServices.getUser(idUser);
      return res
        .status(200)
        .json({ status: 200, data: user, message: "User found succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Create user
  createUser: async (req, res) => {
    //letdata = {user: "req.body.user", password: "req.body.password",};
    let data = { user: "dani", password: "ensolvers" };
    try {
      const user = await userServices.createUser(data);
      return res
        .status(201)
        .json({ status: 201, data: user, message: "User created succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Update user
  updateUser: async (req, res) => {
    // let data = req.params.data;
    let data = { idUser: "1", user: "dani", password: "ensolvers" };
    try {
      const user = await userServices.updateUser(data);
      return res
        .status(200)
        .json({ status: 200, data: user, message: "User updated succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },

  //Delete user
  deleteUser: async (req, res) => {
    // idUser = req.params.idUser;
    const idUser = 1;
    try {
      const user = await userServices.deleteUser(idUser);
      return res
        .status(200)
        .json({ status: 200, data: user, message: "User deleted succesfully" });
    } catch (error) {
      return res.status(500).json({ status: 500, message: error.message });
    }
  },
};
