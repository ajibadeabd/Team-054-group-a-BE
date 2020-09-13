const express = require('express')
const router = express.Router()
const userCtrl = require('../controllers/userCtrl')


//forgot password
router.post("/login",userCtrl.login)
    router.get("/test",  (req,res)=>{
    res.send('work')
});
module.exports =  router