const express = require('express');
const router = express.Router();
const ClienteController = require('../controllers/ClienteController');

router.post('/', ClienteController.agregarClientes);
router.get('/', ClienteController.mostrarClientes);

// Sesión 27
router.get('/:id', ClienteController.mostrarUnCliente);
router.delete('/:id', ClienteController.eliminarClientes);
router.put('/:id', ClienteController.modificarClientes);

module.exports = router;