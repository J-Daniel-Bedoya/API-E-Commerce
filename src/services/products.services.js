const { Users, Products } = require("../models");

class UserServices {

  static async getProd() {
    try {
      const result = await Products.findAll({
        
        attributes: {
          exclude: ["userId", "user_id"]
        },
        include: {
          model: Users,
          as: "user",
          attributes: ["username"]
        }
      });
      return result;
    } catch (error) {
      throw error;
    }
  }
  static async createProd(body) {
    try {
      const result = await Products.create(body);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserServices;