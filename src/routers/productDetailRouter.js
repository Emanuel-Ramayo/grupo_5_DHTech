const express = require('express');
const router = express.Router();

const productDetailController = require('../controllers/productDetailController.js')

router.get('/', productDetailController.mostrarProductDetail);

module.exports = router;