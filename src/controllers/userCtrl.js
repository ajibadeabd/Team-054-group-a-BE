const userServices = require('../services/userService')
const response = require('../utility/response')



class UserCtrl{
    async login(req, res){
      const data = await userServices.login(req,req.body)
      res.status(200).json(response(true,'loogged in',data))

        
    }

}



module.exports = new UserCtrl()