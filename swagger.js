// importamos las dos depencias que acabamos de instalar
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0", 
    info: {
      title: "E-Commerce API",
      version: "1.0.0",
      description: "API para la venta de productos online.",
    },
  },
  apis: [
    "./src/routes/users.routes.js",
    "./src/models/users.models.js",

    "./src/routes/products.routes.js",
    "./src/models/products.models.js"
    ,
    "./src/routes/cart.routes.js",
    "./src/models/productInCart.models.js",

    "./src/routes/orders.routes.js",
    "./src/models/productInOrder.models.js",

  ],
};

const swaggerSpec = swaggerJSDoc(options);

const swaggerDocs = (app, port) => {

  app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  
  console.log(
    `Documentación disponible en http://localhost:${port}/api/v1/docs`
  );
};

module.exports = swaggerDocs; 
