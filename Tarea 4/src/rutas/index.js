const express = require('express');
const router = express.Router();

const resultRoutes = require('./buscar');


router.use('/buscar', resultRoutes);

module.exports = router;