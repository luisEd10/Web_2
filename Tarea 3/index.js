const path = require('path');
const express = require('express');
const ruta = require('./ruta');
const routes = require('./src/rutas');

const port = 3000;

const app = express();

ruta(app);
app.use('', routes);

app.get('*', function(req, res){
    res.status(404).sendFile(path.join(__dirname, 'vistas', 'not_found.html'));
})

app.listen(port, () => {
    console.log('app is running in port ' + port);
});