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
            stock: JSON.parse(req.body.stock),
            descripcion: req.body.descripcion,
            imagenes: req.body.image,
        };

        // Agregar a lo leido en el JSON lo que se capturo del req.body
        productsFS.push(newProduct);

        // Convertir en JSON
        let newProductsJSON = JSON.stringify(productsFS);
        
        // Escribir en el JSON
        fs.writeFileSync(productsFilePath, newProductsJSON);

        // Redireccionar solo después de una escritura exitosa
        res.redirect('/products');
       
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
        
        // Buscar indice del producto
        const indice = productsFS.findIndex(product => product.id === parseInt(req.params.id));
       
        // Cargar información del formulario
        productsFS[indice].nombre = req.body.nombreProducto;
        productsFS[indice].precio = req.body.precio;
        productsFS[indice].categoria = req.body.tipoProducto;
        productsFS[indice].stock = JSON.parse(req.body.stock); // json.parse transforma en booleano el stock
        productsFS[indice].descripcion = req.body.descripcion;
        productsFS[indice].imagenes = req.body.image;
    
        // Convertir el array actualizado a JSON
        const updatedProductsJSON = JSON.stringify(productsFS);
    
        // Escribir en el archivo JSON
        fs.writeFileSync(productsFilePath, updatedProductsJSON);
    
        // Redireccionar a la página de productos
        res.redirect('/products');
        
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
        
        const indice = productsFS.findIndex(product => product.id === parseInt(req.params.id));
        
        if (indice !== -1) {
            productsFS.splice(indice, 1);

            let newProductsJSON = JSON.stringify(productsFS);

            fs.writeFileSync(productsFilePath, newProductsJSON);

            res.redirect('/products');
        } else {
            res.redirect('/products');
        }   
    },

  
};

module.exports = controller