const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController.js')

// Todos los oroductos
router.get('/', productsController.mostrarProducts);

// Categorias de productos
router.get('/monitores', productsController.mostrarMonitores);
router.get('/placasdevideo', productsController.mostrarPlacasDeVideo);
router.get('/procesadores', productsController.mostrarProcesadores);
router.get('/almacenamiento', productsController.mostrarAlmacenamiento);

// Creación de productos
router.get('/create', productsController.crearProducts);

// Edición de productos
router.get('/edit', productsController.editarProducts);


// Detalle de producto
router.get('/:id', productsController.detalleProducts);



module.exports = router;