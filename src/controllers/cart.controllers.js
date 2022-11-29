const { ProductServices } = require("../services");

const addProducts = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await ProductServices.createProd(body);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};

module.exports = {
  addProducts
};