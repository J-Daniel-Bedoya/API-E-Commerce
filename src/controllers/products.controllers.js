const { ProductsServices } = require("../services");

const getProducts = async (req, res, next) => {
  try {
    const result = await ProductsServices.getProd();
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};
const createProducts = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await ProductsServices.createProd(body);
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
  getProducts,
  createProducts
};
