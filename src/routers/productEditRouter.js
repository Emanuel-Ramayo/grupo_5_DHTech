const express = require('express');
const router = express.Router();

const productEditController = require('../controllers/productEditController.js')

router.get('/', productEditController.mostrarProductEdit);

module.exports = router;