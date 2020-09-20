const cors = require('cors')
const helmet = require('helmet')
const express = require('express')
var logger = require('morgan');

const passport = require('passport')
var indexRouter = require('../routes/index');
var path = require('path');

module.exports = function(app){
    app.use(cors())
    app.use(helmet())
    app.use(logger('dev'));
    app.use(express.json())
    app.use(express.urlencoded({extended:false}))
    app.use(express.static(path.join(__dirname, 'public')));
    app.use('/api/v1', indexRouter);
    require("../config/passport")(passport)

    app.use(passport.initialize())

}