/* Requerimos path para encontrar la ruta, no se como seguir aqui */
const path = require('node:path');

/* Paso 1: Requerimos Express */
const express = require('express');

/* Paso 2: Requerimos Router */
const router = express.Router();

/* Paso 3: Ponemos las routes relacionadas */
router.get('/', function(req, res){
    res.render('register');
})

/* Paso 4: Exportamos la variable router */
module.exports = router;