const mongoose= require('mongoose')
const User= require('../models/User')
const  bcrypt = require('bcryptjs')
const  jwt = require('jsonwebtoken')
const CustomError = require('../utils/CustomError')
const response = require('../utils/response')
const config = require('../config/parameters')
const _ = require("lodash");




class UserServices {
    //user sign up 
    async userSignUp(req, res,data) {

        
    }
    //user sign in

    async userSignIn(req, res,data) {
}
  
  }
  module.exports = new UserServices();
  