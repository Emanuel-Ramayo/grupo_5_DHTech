const products = require('../models/data/products.json');
const product = require('../models/productsModel.js');

const controller = {
    mostrarProducts : (req, res) => {
        return res.render('products.ejs', {products})
    },

     // Categorias //
     mostrarMonitores : (req, res) => {
        return res.render('categMonitores.ejs', {products})
    },

    mostrarPlacasDeVideo : (req, res) => {
        return res.render('categPlacasDeVideo.ejs', {products})
    },

    mostrarProcesadores : (req, res) => {
        return res.render('categProcesadores.ejs', {products})
    },

    mostrarAlmacenamiento : (req, res) => {
        return res.render('categAlmacenamiento.ejs', {products})
    },
    //----------------//

    crearProducts : (req, res) => {
        return res.render('productCreation.ejs');
    },

    editarProducts : (req, res) => {
        return res.render('productEdit.ejs');
    },

    detalleProducts : (req, res) => {
        
       const producto = product.selectedProduct(req);
        
       if (producto)
       {
           console.log(producto);
           return res.render('productDetail.ejs', {producto});
       }
       else
       {
        return res.send('no existe el producto')
       }
    },
  
};

module.exports = controller