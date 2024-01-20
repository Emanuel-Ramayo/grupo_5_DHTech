const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')

// Todos los oroductos
router.get('/', productsController.mostrarProducts);

// Creación de productos
router.get('/create', productsController.crearProducts);

// Edición de productos
router.get('/edit', productsController.editarProducts);

// Detalle de producto
router.get('/detail', productsController.detalleProducts);

module.exports = router;