const farmerServices = require('../services/farmerServices')
const response = require('../utility/response')



class farmCtrl{
    async addProduct(req, res,next){
      const data = await farmerServices.addProduct(req,req.body,next)
      res.status(200).json(response(true,'product successfully addes',data))
    }
    
    async editProduct(req, res){
      const data = await farmerServices.editProduct(req,req.body)
      res.status(200).json(response(true,'product updated successfully',data))
    }

    async deleteEacProduct(req, res){
      const data = await farmerServices.deleteEacProduct(req,req.body)
      res.status(200).json(response(true,data.message,data))
    }

    async deleteAllProduct(req, res){
      const data = await farmerServices.deleteAllProduct(req,req.body)
      res.status(200).json(response(true,data.message,data))
    }

    
    async getProduct(req, res){
      const data = await farmerServices.getProduct(req,req.body)
      res.status(200).json(response(true,data.message,data))
    }
    
    async dashboard(req, res){
      const data = await farmerServices.dashboard(req,req.body)
      res.status(200).json(response(true,data.message,data))
    }
}



module.exports = new farmCtrl()