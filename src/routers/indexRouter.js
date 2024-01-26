const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController.js')

router.get('/', indexController.mostrarIndex);

router.get('/nosotros', indexController.mostrarNosotros);
router.get('/dudas', indexController.mostrarDudas);
router.get('/mediosdepago', indexController.mostrarMediosDePago);

module.exports = router;