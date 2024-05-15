// Aquí iniciaremos express
const express = require('express');

//new sesión 26
const conectarBD = require('../config/db');
const cors = require ('cors');

// Configurando express y puerto
const app = express();
const port = 5000;

//enlazamos la conexión de la BD
conectarBD();
app.use(cors());

//new sesión 26
app.use(express.json());
// Aca van las rutas de los módulos
app.use('/api/clientes', require('../routes/RoutersCliente'));

// New sesión 27
// Creando nuevo modulo para productos
app.use('/api/productos', require('../routes/RoutersProductos'));
// New sesión 27






// Puerto donde se lanza el servidor
app.listen(port, () => console.log('Nuestro servidor se encuentra conectado 😎 http://localhost:', port));

app.get('/', (req, res) =>{
  res.send('Bienvenido, nuestro servidor esta configurado');
});

