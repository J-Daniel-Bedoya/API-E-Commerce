const { Users, Orders, ProductsInOrder } = require("../models");
const transporter = require("../utils/mailter");

class OrdersServices {

  static async postOrder(body) {
    try {
      const createOrder = await Orders.create({
        totalPrice: body.totalPrice,
        status: body.status,
        userId: body.userId,
        user_id: body.userId
      })

      const result = await ProductsInOrder.create({...body, orderId: createOrder.id});
      const enviarEmail = await Users.findAll()
      
      console.log(enviarEmail[0])
      transporter.sendMail({
        from: "<jbedoyachavarriaga@gmail.com>",
        to: enviarEmail,
        subject: `Gracias por preferir a My shop`,
        text: `Haz realizado la compra de ${body.quantity} productos por un total de ${body.totalPrice}`,
        // html: welcomeTemplate(result.firstname, result.lastname),
      }); 
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async getAll(id) {
    try {
      const result = await Users.findOne({
        where: { id },
        attributes: ["username"],
        include: {
          model: Orders,
          as: "orders",
          attributes: {
            exclude: ["userId"]
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