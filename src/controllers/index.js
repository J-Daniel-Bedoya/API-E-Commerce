const { userLogin } = require("./auth.controllers");
const {userRegister, getUser} = require("./users.controllers");
const { getProductsAll, getProducts, createProducts } = require("./products.controllers");
const { addProducts, seeCart } = require("./cart.controllers");
const { createOrder, getOrder } = require("./orders.controllers");

module.exports = {
  userLogin,
  userRegister,
  getUser,
  getProductsAll,
  getProducts,
  createProducts,
  addProducts,
  seeCart,
  createOrder,
  getOrder,
}