const { OrdersServices } = require("../services");


const createOrder = async (req, res, next) => {
  try {
    const { id } = req.params;
    const body = req.body;
    const result = await OrdersServices.postOrder(id, body);
    res.status(201).json(result);

  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Algo salio mal",
    });
  }
};
const getOrder = async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await OrdersServices.getAll(id);
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
  createOrder,
  getOrder,
};