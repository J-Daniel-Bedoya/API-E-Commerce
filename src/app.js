const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error");
const { authRouter, usersRoutes, productsRoutes } = require("./routes");
const initModels = require("./models/initModels");

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());  

initModels()

db.authenticate()
  .then(() => console.log('Autenticación exitosa'))
  .catch((err) => console.log(err))
  
db.sync({ alter: true })
  .then(() => console.log('Conexión exitosa'))
  .catch((err) => console.log(err))
  
app.get('/', (req, res) => {
  res.status(200).json('Respuesta exitosa')
});

app.use("/api/v1", authRouter);
app.use("/api/v1", usersRoutes);
app.use("/api/v1", productsRoutes);
  
app.use(handleError);
module.exports = app;