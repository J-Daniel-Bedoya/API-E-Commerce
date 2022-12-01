const { ProductsServices } = require("../services");

const getProducts = async (req, res, next) => {
  try {
    const offset = req.query.offset ?? 0;
    const limit = req.query.limit ?? 5;
    const allProducts = await ProductsServices.getProd(offset, limit);
    const productsAvailable = [];
    allProducts.forEach(e=>{
        if(e.availableQty !== 0){
            productsAvailable.push(e)
        }
    })
    res.status(201).json(productsAvailable);
  } catch (error) {
    next({
        message: 'no se pudo obtener los productos',
        status:400,
        errorContent: error
    })
  }
}
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
