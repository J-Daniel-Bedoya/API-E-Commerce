const { Users, Cart, Orders, Products, ProductsInOrder, ProductInCart } = require("./index");

const initModels = () => {

  // U:U

  Cart.belongsTo(Users, { as: "carritos", foreignKey: "user_id" });
  Users.hasOne(Cart, { as: "propietario", foreignKey: "user_id" });

  // U:M

  Products.belongsTo(Users, { as: "user", foreignKey: "user_id" });
  Users.hasMany(Products, { as: "productos", foreignKey: "user_id" });
  
  //U:M 

  Orders.belongsTo(Users, { as: "compra", foreignKey: "user_id" });
  Users.hasMany(Orders, { as: "comprador", foreignKey: "user_id" });

  // M:M

  ProductsInOrder.belongsTo(Orders, { foreignKey: "order_id" })
  Orders.hasMany(ProductsInOrder, { foreignKey: "order_id" })

  ProductsInOrder.belongsTo(Products, { foreignKey: "product_id" })
  Products.hasMany(ProductsInOrder, { foreignKey: "product_id" })

  // M:M

  ProductInCart.belongsTo(Cart, { foreignKey: "cart_id" })
  Cart.hasMany(ProductInCart, { foreignKey: "cart_id" })

  ProductInCart.belongsTo(Products, { foreignKey: "product_id" })
  Products.hasMany(ProductInCart, { foreignKey: "product_id" })

};

module.exports = initModels;