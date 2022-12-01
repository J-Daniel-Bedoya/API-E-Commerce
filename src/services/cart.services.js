const { Cart, ProductInCart } = require("../models");

class CartServices {

  static async readCart(id) {
    try {
      const result = await Cart.findOne({
        where: { id },
        attributes: {
          exclude: ["userId", "user_id"]
        },
        include: {
          model: ProductInCart,
          as: "products",
          attributes: {
            exclude: ["cartId", "cart_id", "productId", "product_id"]
          }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCart(product) {
    try {
      const result = await ProductInCart.create(product);
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CartServices;