
const products = require('../models/data/products.json');

const controller = {
    mostrarIndex : (req, res) => {
        return res.render('index.ejs', {products})
    },

    mostrarNosotros : (req, res) => {
        return res.render('aboutUs.ejs')
    },

    mostrarDudas : (req, res) => {
        return res.render('questions.ejs')
    },

    mostrarMediosDePago : (req, res) => {
        return res.render('payMethods.ejs')
    },
}

module.exports = controller