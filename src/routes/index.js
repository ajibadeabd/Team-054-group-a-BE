const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const farmerRoutes = require('./farmer');

router.use('/user', userRoutes);
router.use('/farmer', farmerRoutes);

module.exports = router;
