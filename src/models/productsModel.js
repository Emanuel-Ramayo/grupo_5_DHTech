// const fs = require('fs');
// const path = require('path');

// const productsFilePath = path.join(__dirname, '/data/products.json');
// const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const products = require('./data/products.json');

const modelProduct = {

    selectedProduct: (req, res) => {
        let product = products.find(producto => producto.id == req.params.id);
        return product;
    },
    
};

module.exports = modelProduct;