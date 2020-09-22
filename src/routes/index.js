const express = require('express');
const router = express.Router();
const userRoutes = require('./user');
const farmerRoutes = require('./farmer');
const storeRoutes = require('./store');

router.use('/user', userRoutes);
router.use('/farmer', farmerRoutes);
router.use('/store', storeRoutes);

module.exports = router;
