const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { getProducts, createProducts } = require("../controllers");

router.get("/products", authenticate, getProducts);

router.post("/products", createProducts)

module.exports = router;