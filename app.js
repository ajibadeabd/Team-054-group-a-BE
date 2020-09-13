var createError = require('http-errors');
var express = require('express');
var app = express();

var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var dotenv = require('dotenv');
dotenv.config()
var userRouter = require('./src/routes/user');
var preroutemiddleware = require('./src/middlewares/preroutemiddleware');
preroutemiddleware(app)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


module.exports = app;
