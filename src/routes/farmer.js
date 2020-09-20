const express = require('express');
const passport = require('passport');
const router = express.Router();
const farmerCntr = require('../controllers/farmerCntr');
const auth = passport.authenticate('jwt',{session:false});

router.post("/add-product",auth,farmerCntr.addProduct);
module.exports =  router;