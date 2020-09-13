const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
const passport = require('passport')

module.exports = function(app){
    app.use(cors())
    app.use(helmet())
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(passport.initialize())
    require("../config/passport")(passport)

}