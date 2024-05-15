const mongoose = require('mongoose');
require('dotenv').config();

// función para conectar a la base de datos

const conectarBD = () => {
  mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Conectado a la base de datos ⚡"))
  .catch((err) => console.error(err));
}

module.exports = conectarBD;