const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userRegister, getUser } = require("../controllers");

router.post("/users", userRegister);
router.get("/users/:id", authenticate, getUser);

module.exports = router;