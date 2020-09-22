const express = require('express');
const passport = require('passport');
const router = express.Router();
const farmerCntr = require('../controllers/storeCntr');
const auth = passport.authenticate('jwt',{session:false});

router.get("/",auth,farmerCntr.getEachUserStore);
router.post("/create_store",auth,farmerCntr.createEachUserStore);

module.exports =  router;