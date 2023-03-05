const router = require('express').Router();
const ControladorResultados = require('../controladores/busqueda');

router.get('/', ControladorResultados.listar);

module.exports = router;
