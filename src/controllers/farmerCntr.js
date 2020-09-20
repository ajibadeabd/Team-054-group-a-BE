const farmerServices = require('../services/farmerServices')
const response = require('../utility/response')



class farmCtrl{
    async addProduct(req, res,next){
      const data = await farmerServices.addProduct(req,req.body,next)
      res.status(200).json(response(true,'successfully logged in',data))
    }
}



module.exports = new farmCtrl()