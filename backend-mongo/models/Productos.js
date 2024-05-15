// Cliente.js Va a contener el modelo, el modelo debe ser igual a lo que tenga la base de datos:

const mongoose  = require ('mongoose');

const productosSchema = mongoose.Schema({

  marca: {
    type: String,
    required: true
  }, 
  categoria: {
    type: String,
    required: true
  }, 
  proveedor: {
    type: String,
    required: true
  }, 
  referencia: {
    type: String,
    required: true
  }, 
  precio: {
    type: Number,
    required: true
  }, 

}, {versionkey: false});

module.exports = mongoose.model('Productos', productosSchema);

