const express = require('express');
const app = express();
const path = require('node:path');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* Establecemos la carpeta public */
const publicPath = path.resolve(__dirname, '../public');
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


/* Llamamos al archivo de ruotes correspondiente */
const rutaIndex = require('./routers/indexRouter.js');
const rutaProductDetail = require('./routers/productDetailRouter.js');
const rutaProductCart = require('./routers/productCartRouter.js');
const rutaRegister = require('./routers/registerRouter.js');
const rutaLogin = require('./routers/loginRouter.js');


/* Link con app.use a la variable registerRouter */
app.use('/', rutaIndex);

app.use('/productCart', rutaProductCart);

app.use('/productDetail', rutaProductDetail);

app.use('/register', rutaRegister);

app.use('/login', rutaLogin);