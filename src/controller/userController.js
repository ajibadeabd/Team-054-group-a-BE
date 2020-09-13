userServ = require('../services/userServices')


class userController{


     async login(req,res){
         let data = await userServ.login(req,req.body)
        //  res.send(response())

     }

}
module.exports= new userController()