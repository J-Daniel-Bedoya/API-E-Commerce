const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { addProducts } = require("../controllers");

router.post("/cart", authenticate, addProducts)

module.exports = router;