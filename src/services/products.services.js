const { Users, Products } = require("../models");

class ProductsServices {

  static async getProd(offset, limit) {
    try {
        const result = await Products.findAll({
          attributes: {
            exclude: ["userId", "user_id"]
          },
          include:{
            model: Users,
            as: "user",
            attributes: ["username"]
          },
          offset,
          limit,
        });
        return result;
    } catch (error) {
        throw(error); 
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

module.exports = ProductsServices;