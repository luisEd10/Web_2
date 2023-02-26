const path = require('path');
const express = require('express');

module.exports = function(app){
    app.use('/assets', express.static(path.join(__dirname, 'assets')));
    app.use('/recursos', express.static(path.join(__dirname, 'recursos')));

    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, 'vistas', 'index.html'));
    })
}