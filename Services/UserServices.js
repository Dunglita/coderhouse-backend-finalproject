const userModel = require("../Domain/UserModel.js");
const userRepository = require("../Repositories/UserRepository.js");

module.exports = {
  getUser: async (idUser) => {
    try {
      const user = await userRepository.getUser(idUser);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  createUser: async (data) => {
    try {
      const newUser = await userRepository.createUser(data);
      return newUser;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  updateUser: async (data) => {
    try {
      const user = await userRepository.updateUser(data);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
  deleteUser: async (idUser) => {
    try {
      const user = await userRepository.deleteUser(idUser);
      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  },
};
