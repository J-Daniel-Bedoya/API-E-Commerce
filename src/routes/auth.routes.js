const express = require("express");
const router = express.Router();
const { userLogin } = require("../controllers");

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Start session in the app
 *     tags: [Users]
 *     requestBody:
 *       description: Start a new section in the app to obtain the privileges to make operations.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       201:
 *         description: entering the app
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
 *                     $ref: "#/components/schemas/request_auth"
 */

router.post("/auth/login", userLogin);


module.exports = router;
