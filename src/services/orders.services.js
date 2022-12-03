const { Users, Orders, ProductsInOrder, Cart, ProductInCart, Products } = require("../models");
const transporter = require("../utils/mailter"); 
const orderTemplate = require("../templates/newOrder");

class OrdersServices {

  static async postOrder(id, body) {
    try {
      const allProducts = await ProductInCart.findAll();
      const cart = await Cart.findOne({where:{ id }});
      const order = await Orders.create({
          totalPrice: cart.totalPrice,
          status: cart.status,
          userId: id,
      });
      const quantityArr = [];
      allProducts.forEach((prod) => {
          quantityArr.push(prod.quantity);
      })
      const quantity = quantityArr.reduce((a, b) => a + b);

      allProducts.forEach( async(prod) => {
        const product = await Products.findOne({where: prod.productId});
        const orderProducts =  ProductsInOrder.create({
          quantity: prod.quantity,
          price: prod.price,
          status: prod.status,
          orderId: order.id,
          productId: prod.productId,
        });
        
        product.update({availableQty: product.availableQty - prod.quantity});
      });

      cart.update({
          status: true,
          totalPrice: 0,
      });

      const user = await Users.findOne({where: {id}});

      transporter.sendMail({
        from: "<jbedoyachavarriaga@gmail.com>",
        to: user.email,
        subject: `Gracias por preferir a My shop`,
        text: `Haz realizado la compra de ${quantity} productos por un total de ${order.totalPrice}`,
        html: orderTemplate(user.username, quantity, order.totalPrice),
      }); 

      allProducts.forEach( async(prod) => {
        await prod.destroy();
      })
      return order;
    } catch (error) {
      throw error;
    }
  }
  static async getOrder(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username"],
        include: {
            model: Orders,
            as: "purchased",
            attributes: {
              exclude: ["userId", "user_id"]
            },
            include: {
              model: ProductsInOrder,
              as: "orders",
              attributes: {
                exclude: ["orderId", "order_id", "productId", "product_id"]
              }
            }
        }

      });
 
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = OrdersServices;

