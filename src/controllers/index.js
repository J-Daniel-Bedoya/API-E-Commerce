const { userLogin } = require("./auth.controllers");
const {userRegister, getUser} = require("./users.controllers");
const { getProducts, createProducts } = require("./products.controllers");
const { addProducts } = require("./cart.controllers");

module.exports = {
  userLogin,
  userRegister,
  getUser,
  getProducts,
  createProducts,
  addProducts,
}