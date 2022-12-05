const { Users, Products, Categories  } = require("../models");

class ProductsServices {

  static async getProdAll() {
    try {
        const result = await Products.findAll({
          attributes: {
            exclude: ["userId", "user_id", "categoryId", "category_id"]
          },
          include: [
            {
              model: Users,
              as: "user",
              attributes: ["username"]
            },
            {
              model: Categories,
              as: "category",
              attributes: ["name_category"]
            }
          ]
        });
        return result;
    } catch (error) {
        throw(error); 
    }
  }
  static async getProd(id) {
    try {
        const result = await Users.findOne({
          where: { id },
          attributes: ["username"],
          include: [
            {
              model: Products,
              as: "products",
              attributes: {
                exclude: ["userId", "user_id", "categoryId", "category_id"]
              },
              include: {
                model: Categories,
                as: "category",
                attributes: ["name_category"]
              }
            },
          ]
        });
        // console.log(result.products)
        return result;
    } catch (error) {
        throw(error); 
    }
  }
  static async createProd(id, body) {
    try {
      const result = await Products.create({...body, userId: id});
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProductsServices;