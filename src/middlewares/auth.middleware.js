const jwt = require("jsonwebtoken");
const { json } = require("sequelize");
require("dotenv").config();

const authenticate = (req, res, next) => {
  // header authorization
  // Bearer lñsdhfipuryhtkdvm,cxnbvkjhyguireyhgjkdh
  const bearerToken = req.headers.authorization;
  if (bearerToken) {
    const token = bearerToken.split("Bearer ")[1];
    console.log(token);
    try {
      const decoded = jwt.verify(token, process.env.SECRET, "HS512");
      next();
    } catch (error) {
      next({
        status: 400,
        errorContent: error,
        message: "Invalid Token",
      });
    }
  } else{
    res.json({message: "No token provide"})
  }
};

module.exports = authenticate;
