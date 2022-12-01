const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { addProducts, seeCart } = require("../controllers");

/**
 * @openapi
 * /api/v1/cart/addProduct:
 *   post:
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     requestBody:
 *       description: Add a new product to the shopping cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/add_cart"
 *     responses:
 *       201:
 *         description: add product
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
 *                     $ref: "#/components/schemas/request_cart"
 * /api/v1/users/{id}/cart:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of a cart in the app
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
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
 *                     $ref: "#/components/schemas/request_cart"
 */


router.post("/cart/addProduct", addProducts)

router.get("/users/:id/cart", authenticate, seeCart)

module.exports = router;
