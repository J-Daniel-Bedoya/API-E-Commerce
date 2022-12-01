const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { addProducts, seeCart } = require("../controllers");

router.get("/cart", seeCart)

router.post("/cart/addProduct", addProducts)

module.exports = router;