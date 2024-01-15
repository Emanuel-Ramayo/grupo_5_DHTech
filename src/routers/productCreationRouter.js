const express = require('express');
const router = express.Router();

const productCreationController = require('../controllers/productCreationController.js')

router.get('/', productCreationController.mostrarProductCreation);

module.exports = router;