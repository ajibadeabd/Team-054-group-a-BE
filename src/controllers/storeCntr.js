const storeServices = require('../services/store')
const response = require('../utility/response')



class storeCtrl{
    async getEachUserStore(req, res,next){
      const data = await storeServices.getEachUserStore(req,req.body,next)
      res.status(200).json(response(true,'these are all your stores',data))
    }

    async createEachUserStore(req, res,next){
        const data = await storeServices.createEachUserStore(req,req.body,next)
        res.status(200).json(response(true,'these are all your stores',data))
      }
    
    
}



module.exports = new storeCtrl()