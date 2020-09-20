const userServices = require('../services/userService')
const response = require('../utility/response')



class UserCtrl{
    async login(req, res,next){
      const data = await userServices.login(req,req.body,next)
      res.status(200).json(response(true,'successfully logged in',data))
    }
    async register(req, res,next){
      const data = await userServices.register(req,req.body,next)
      res.status(201).json(response(true,'successfully registered',data))
    }
    async updateProfile(req, res){
      const data = await userServices.updateProfile(req,req.body)
      res.status(201).json(response(true,'profile has successfully been updated',data))
    }
 
    async resetPassword(req, res){
      const data = await userServices.resetPassword(req,req.body)
      res.status(201).json(response(true,"your password was reset successfully",data))
    }

    async forgetPassword(req, res){
      const data = await userServices.forgetPassword(req,req.body)
      res.status(200).json(response(true,"a link has been sent to your email",data))
    }
}



module.exports = new UserCtrl()