const express = require('express');
const routes = require('./src/rutas');
require('dotenv').config();
const mongoose = require('mongoose');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const swaggerConfig = require('./swagger.config');


const port = process.env.PORT || 3000;

const app = express();

const mongoUrl = process.env.MONGO_URL;
console.log(mongoUrl);

const swaggerDocs = swaggerJsDoc(swaggerConfig);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.use('', routes);

/*app.get('*', function(req, res){
    res.status(404).send('pagina no encontrada');
})*/

mongoose.connect(mongoUrl).then(() =>{
    console.log('se conecto correctamente');
    app.listen(port, () => {
        console.log('app is running in port ' + port);
    }); //el puerto donde nuestra app esta escuchando
}).catch(err => {
    console.log(err);
    console.log('No se pudo conectar a la base de datos');
})