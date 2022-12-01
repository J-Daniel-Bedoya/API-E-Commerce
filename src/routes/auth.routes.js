const express = require("express");
const router = express.Router();
const { userLogin } = require("../controllers");


router.post("/auth/login", userLogin);


module.exports = router;
