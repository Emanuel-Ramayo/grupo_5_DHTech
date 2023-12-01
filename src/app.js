const express = require('express');
const app = express();
const path = require('node:path');
app.set('view engine', 'ejs');

/* Llamamos al archivo de ruotes correspondiente */
const registerRouter = require('./routers/registerRouter.js');


/* Link con app.use a la variable registerRouter */
app.use('/register', registerRouter);


const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));

app.listen(3030, () => console.log('Servidor iniciado en el puerto 3030'));


//Links
app.get('/', function(req, res){
    //Aca hice un Cambio en app.get('/') a app.get('/index'), debido a que no funcionaba al levantar el server
    res.sendFile(path.resolve(__dirname, './views/index.html'))
})

app.get('/login', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/login.html'))
})



app.get('/productCart', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/productCart.html'))
})

app.get('/productDetail', function(req, res){
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'))
})