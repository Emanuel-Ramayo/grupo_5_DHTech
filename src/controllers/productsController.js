const products = require('../models/data/products.json');
const product = require('../models/productsModel.js');

// Leer JSON
const fs = require('fs');
const path = require('path');
const productsFilePath = path.join(__dirname, '../models/data/products.json');
const productsFS = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


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

    createProduct : (req, res) => {
        return res.render('productCreation.ejs');
    },

    saveNewProduct : (req, res) => {

        // Filtrar lo que se quiere capturar del req.body
        let newProduct = {
            id: products.length + 1,
            nombre: req.body.nombreProducto,
            precio: req.body.precio,
            categoria: req.body.tipoProducto,
            stock: req.body.stock,
            descripcion: req.body.descripcion,
            imagenes: req.body.image,
        };

        // Agregar a lo leido en el JSON lo que se capturo del req.body
        productsFS.push(newProduct);

        // Convertir en JSON
        let newProductsJSON = JSON.stringify(productsFS);

        console.log(productsFilePath);
        
        try {
            fs.writeFileSync(productsFilePath, newProductsJSON);
            console.log('Archivo actualizado correctamente');
            // Redireccionar solo después de una escritura exitosa
            res.redirect('/products');
        } catch (error) {
            console.error('Error al escribir en el archivo:', error);
            // Manejar el error de alguna manera
            res.status(500).send('Error interno del servidor');
        }
    }, 

    editarProducts : (req, res) => {

        const producto = product.selectedProduct(req);
        
        if (producto)
        {
            return res.render('productEdit.ejs', {producto});
        }
        else
        {
         return res.send('no existe el producto')
        }
    },

    saveEditProduct : (req, res) => {
        
        const producto = product.selectedProduct(req);
        
        if (producto)
        {
            return res.render('productEdit.ejs', {producto});
        }
        else
        {
         return res.send('no existe el producto')
        }
    },

    detalleProducts : (req, res) => {
        
       const producto = product.selectedProduct(req);
        
       if (producto)
       {
           return res.render('productDetail.ejs', {producto});
       }
       else
       {
        return res.send('no existe el producto')
       }
    },

    deleteProduct : (req, res) => {
        
        const producto = product.selectedProduct(req);
        
        if (producto)
        {
            return res.render('productEdit.ejs', {producto});
        }
        else
        {
         return res.send('no existe el producto')
        }
    },
  
};

module.exports = controller