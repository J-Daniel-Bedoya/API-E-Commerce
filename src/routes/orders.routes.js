const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { createOrder, getOrder } = require("../controllers");

router.post("/orders", createOrder)

router.get("/users/:id/orders", getOrder);

module.exports = router;