const { CartServices } = require("../services");

const seeCart = async (req, res, next) => {
  try {
    const { id }  = req.params;
    const result = await CartServices.readCart(id);
    res.json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}
const addProducts = async (req, res, next) => {
  try {
    const body = req.body;
    const result = await CartServices.addCart(body);
    res.status(201).json(result);
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
}


module.exports = {
  addProducts,
  seeCart,
};