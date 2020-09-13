const express = require('express')
const passport = require('passport')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')
const auth = passport.authenticate('jwt',{session:false})

router.post("/login",userCtrl.login)
router.post("/register",userCtrl.register)
router.post("/update_profile",auth,userCtrl.updateProfile)




    router.get("/test",  (req,res)=>{
    res.send('work')
});
module.exports =  router