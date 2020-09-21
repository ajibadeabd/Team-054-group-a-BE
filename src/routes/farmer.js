const express = require('express');
const passport = require('passport');
const router = express.Router();
const farmerCntr = require('../controllers/farmerCntr');
const auth = passport.authenticate('jwt',{session:false});

router.post("/add-product",auth,farmerCntr.addProduct);
router.post("/edit-product/:productId",auth,farmerCntr.editProduct);
router.delete("/delete-each-product/:productId",auth,farmerCntr.deleteEacProduct);
router.delete("/delete-all-product",auth,farmerCntr.deleteAllProduct);
router.get("/all-product",auth,farmerCntr.getProduct);
module.exports =  router;