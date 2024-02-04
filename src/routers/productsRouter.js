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
router.get('/create', productsController.createProduct);
router.post('/create', productsController.saveNewProduct);

// Edición de productos
router.get('/edit/:id', productsController.editarProducts);
router.put('/edit/:id', productsController.saveEditProduct);


// Detalle de producto
router.get('/:id', productsController.detalleProducts);

// Eliminar producto
router.delete('/delete/:id', productsController.deleteProduct);


module.exports = router;