const express = require('express');
const morgan = require('morgan');
const cors = require("cors");
const db = require('./utils/database');
const handleError = require("./middlewares/error");
const { 
  authRouter, 
  usersRoutes, 
  productsRoutes, 
  cartRoutes,
  ordersRoutes, 
} = require("./routes");
const initModels = require("./models/initModels");
const transporter = require("./utils/mailter");

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
  
// transporter
// .verify() // devuelve una promesa
// .then(() =>
//   console.log("Listo para regitrar")
// );

app.get('/', (req, res) => {
  res.status(200).json('Respuesta exitosa')
});

app.use("/api/v1", authRouter);
app.use("/api/v1", usersRoutes);
app.use("/api/v1", productsRoutes);
app.use("/api/v1", cartRoutes);
app.use("/api/v1", ordersRoutes);
  
app.use(handleError);
module.exports = app;