const express = require('express');
const router = express.Router();

const hobRoutes = require('./hobbies');
const galRoutes = require('./gallery');

router.use('/hobbies', hobRoutes);
router.use('/gallery', galRoutes);

module.exports = router;