const express = require("express");
const router = express.Router();
const { getProducts, createProducts } = require("../controllers");

/**
 * @openapi
 * /api/v1/products/create:
 *   post:
 *     summary: Create a new product
 *     tags: [Products]
 *     requestBody:
 *       description: Create a new product for the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/create_product"
 *     responses:
 *       201:
 *         description: created product
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 * /api/v1/products:
 *   get:
 *     summary: See the data of a product in the app
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Data displayed successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_product"
 */


router.post("/products/create", createProducts)

router.get("/products", getProducts);


module.exports = router;