const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { addProducts, seeCart } = require("../controllers");

/**
 * @openapi
 * /api/v1/users/{id}/cart:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Add a product to the cart
 *     tags: [Cart]
 *     requestBody:
 *       description: Add a new product to the shopping cart
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/add_cart"
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
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


router.post("/users/:id/cart", authenticate, addProducts)

router.get("/users/:id/cart", authenticate, seeCart)

module.exports = router;
