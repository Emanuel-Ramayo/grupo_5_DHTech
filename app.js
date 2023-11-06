
const express = require('express');
const app = express();
const path = require('node:path');

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3030, () => console.log('Servidor iniciado en el puerto 3030'));


//Links
app.get('/index', function(req, res){
    //Aca hice un Cambio en app.get('/') a app.get('/index'), debido a que no funcionaba al levantar el server
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})

app.get('/register', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/register.html'))
})

app.get('/productCart', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

app.get('/productDetail', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})