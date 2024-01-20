const express = require('express');
const path = require('node:path');
const app = express();
const PORT = process.env.PORT ?? 3030;
app.listen(PORT, err =>{
    console.log(err? err : `Servidor Iniciado en http://localhost:${PORT}`);
});

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* Establecemos la carpeta public */
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


/* Llamamos al archivo de ruotes correspondiente */
const rutaIndex = require('./routers/indexRouter.js');
const rutaProducts = require('./routers/productsRouter.js');
const rutaProductCart = require('./routers/productCartRouter.js');
const rutaRegister = require('./routers/registerRouter.js');
const rutaLogin = require('./routers/loginRouter.js');
const { log } = require('node:console');


/* Link con app.use a la variable registerRouter */
app.use('/', rutaIndex);

app.use('/products', rutaProducts);

app.use('/productCart', rutaProductCart);

app.use('/register', rutaRegister);

app.use('/login', rutaLogin);
