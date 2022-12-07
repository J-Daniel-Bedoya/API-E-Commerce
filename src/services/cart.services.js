const { Cart, ProductInCart, Products } = require("../models");

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
            exclude: ["cartId", "cart_id", "product_id"]
          }
        },
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async addCart(id, product) {
    try {

      const idProduct = product.productId;
      const priceProduct =  await Products.findOne({ where: {id:idProduct}});
      const priceTotalProduct = product.quantity * priceProduct?.price;
      const result = await ProductInCart.create({...product, price: priceTotalProduct, cartId: id, productId: idProduct});

      const totalPriceCartArray = await ProductInCart.findAll();
      const totalPriceCart = totalPriceCartArray.map(total => { return total.price});
      const priceTotal = totalPriceCart.reduce((a, b) => a + b);
      const cart = await Cart.findOne({where: {id}})
      const res = await cart.update({totalPrice: priceTotal})
      return result;
    } catch (error) {
      throw error;
    }
  } 
  static async upCart(idCart, idProduct, quantity) {
    try {
      const prod = await ProductInCart.findAll({ where: { cartId: idCart } })
      prod.map( async(pro) => {
        let price = 0;
        if (Number(idProduct) === pro.dataValues.productId){
          await pro.update(quantity)
        }
      })
      prod.map( async(pro) => {
        if (Number(idProduct) === pro.dataValues.productId){
          const priceProduct =  await Products.findOne({ where: {id:idProduct}});
          const price = pro.quantity * priceProduct.price;
          await pro.update({price: price});
        }
      })

      const totalPriceCartArray = await ProductInCart.findAll();
      const totalPriceCart = totalPriceCartArray.map(total => { return total.price});
      const priceTotal = totalPriceCart.reduce((a, b) => a + b);
      const cart = await Cart.findOne({where: {id: idCart}});
      await cart.update({totalPrice: priceTotal});

      return prod;
    } catch (error) {
      throw error;
    }
  }
  static async delCart(idCart, idProduct) {
    try {
      const prod = await ProductInCart.findAll({ where: { cartId: idCart } })
      prod.map(pro => {
        if (Number(idProduct) === pro.dataValues.productId){
          pro.destroy()
        }
      })
      
      const totalPriceCartArray = await ProductInCart.findAll();
      const totalPriceCart = totalPriceCartArray.map(total => { return total.price});
      const priceTotal = totalPriceCart.reduce((a, b) => a + b);
      const cart = await Cart.findOne({where: {id: idCart}});
      await cart.update({totalPrice: priceTotal});

      return prod;
    } catch (error) {
      throw error;
    }
  }

}

module.exports = CartServices;