const { Cart, ProductInCart, Products } = require("../models");

class CartServices {

  static async readCart(id) {
    const totalPriceCartArray = await ProductInCart.findAll();
    const totalPriceCart = totalPriceCartArray.map(e => { return e.price});
    const priceTotal = totalPriceCart.reduce((a, b) => a + b);
    const cart = await Cart.findOne({where: {id}})
    const res = await cart.update({totalPrice: priceTotal})

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
  static async addCart(ids, product) {
    try {
      const id = product.productId;
      const priceProduct =  await Products.findOne({ where: {id}});
      const priceTotalProduct = product.quantity * priceProduct.price;
      const result = await ProductInCart.create({...product, price: priceTotalProduct, cartId: ids});
      return result;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CartServices;