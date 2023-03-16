const express = require('express');
const router = express.Router();

const taskRoutes = require('./tareas');

router.use('', express.json());

router.use('/tareas', taskRoutes);

module.exports = router;