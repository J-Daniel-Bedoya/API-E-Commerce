const authRouter = require("./auth.routes");
const usersRoutes = require("./users.routes"); 
const productsRoutes = require("./products.routes");
const cartRoutes = require("./cart.routes");
const ordersRoutes = require("./orders.routes");

module.exports = { 
  authRouter, 
  usersRoutes,
  productsRoutes,
  cartRoutes,
  ordersRoutes,
}