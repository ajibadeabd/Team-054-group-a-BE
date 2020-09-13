const User = require('../models/userModel')
const CustomError = require('../utility/CustomError')
const Email = require('../utility/mailServices')
const Crypto = require("crypto");



class UserServices{
    async login(req,data){
        if (!req.body.user) throw new CustomError("provide a user details please", 400)

     return data
    }

}


module.exports = new UserServices()