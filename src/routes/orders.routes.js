const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { createOrder, getOrder } = require("../controllers");

/**
 * @openapi
 * /api/v1/users/{id}/orders/create:
 *   post:
 *     summary: Create a order in the app
 *     tags: [Order]
 *     requestBody:
 *       description: Create a new order in the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/create_order"
 *     responses:
 *       201:
 *         description: create order
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
 *                     $ref: "#/components/schemas/request_order"
 * /api/v1/users/{id}/orders:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of the users orders in the app
 *     tags: [Order]
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
 *                     $ref: "#/components/schemas/request_order"
 */

router.post("/users/:id/orders/create", createOrder)

router.get("/users/:id/orders", authenticate, getOrder);

module.exports = router;