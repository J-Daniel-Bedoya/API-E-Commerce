const app = require("./app");
const swaggerDocs = require("../swagger");
require("dotenv").config();

const PORT = process.env.PORT;
  
const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado en el PORT: ${PORT}`);
  swaggerDocs(app, PORT);
});

module.exports = server;