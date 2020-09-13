const joi = require('joi')
const CustomError = require('../utility/CustomError')



exports.validateEmail = async (req, res, next)=>{
    const Schema = {
        email:joi.string().email().required(),
    }
    const result = joi.validate(req.body, Schema)
    if(result.error)   throw new CustomError(result.error.message, 401);
    next();
}

