const controller = {
    mostrarProducts : (req, res) => {
        return res.render('products.ejs')
    },

    crearProducts : (req, res) => {
        return res.render('productCreation.ejs')
    },

    editarProducts : (req, res) => {
        return res.render('productEdit.ejs')
    },

    detalleProducts : (req, res) => {
        return res.render('productDetail.ejs')
    },

};

module.exports = controller