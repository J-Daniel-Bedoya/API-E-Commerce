const db = require("../utils/database");
const { DataTypes } = require("sequelize");

/**
 * @openapi
 * components:
 *   schemas:
 *     request_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Alpinito
 *         price:
 *           type: number
 *           example: 4000
 *         image:
 *           type: string
 *           example: https://bit.ly/3Y1d0I7
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *         userId:
 *           type: number
 *           example: 1
 *     create_product:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           example: Alpinito
 *         price:
 *           type: number
 *           example: 4000
 *         image:
 *           type: string
 *           example: https://bit.ly/3Y1d0I7
 *         availableQty:
 *           type: number
 *           example: 5
 *         status:
 *           type: boolean
 *           example: true
 *     securitySchemes:
 *       bearerAuth:
 *         type: http
 *         scheme: Bearer
 *         bearerFormat: JWT
 */

const Products = db.define(
  "products",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    availableQty: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "available_qty",
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    }
  }, {
    timestamps: false,
  }
);

module.exports = Products;