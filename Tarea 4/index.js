const path = require('path');
const express = require('express');
const ruta = require('./ruta');
const routes = require('./src/rutas');

const { engine } = require('express-handlebars');

const port = 3000;

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

ruta(app);
app.use('', routes);

app.get('*', function(req, res){
    res.status(404).sendFile(path.join(__dirname, 'src', 'views', 'not_found.html'));
})

app.listen(port, () => {
    console.log('app is running in port ' + port);
});