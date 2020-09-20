const Store = require('../models/stores')
const Product = require('../models/product')
const CustomError = require('../utility/CustomError')
const {idValidator} = require('../utility/validator')
const Email = require('../utility/mailServices')
const config = require('../config/constants')
const _ = require("lodash");



class farmerServices{
    async addProduct(req,data){
        data=_.pick(data,['productName','status','price','stockQuantity','unit'])
        // data.ownerId=req.user._id
        // let saveProduct = await new Product(data)
        // await saveProduct.save()

return config.accessTokenexpires_expiresIn
    }

    async editProduct(req,data){
        data=_.pick(data,['productName','status','price','stockQuantity','unit'])
        let id = req.params.id
        idValidator(id)
        let isExist  = await Product.findOne({userId:req.user.Id,productId:id})
       if(!isExist) throw new  CustomError("you dont have this product on your list", 400,false); 
        isExist.price=data.price;
        isExist.name=data.name;
        isExist.unit=data.unit;
        isExist.stockQuantity=data.stockQuantity;
        isExist.status=data.status;
        await isExist.save()
    }

    async deleteProduct(req,data){
        data=_.pick(data,['productName','status','price','stockQuantity','unit'])
        let id = req.params.id
        idValidator(id)
        let isExist  = await Product.findOne({userId:req.user.Id,productId:id})
       if(!isExist) throw new  CustomError("item is not on your list", 400,false); 
       await Product.findByIdAndDelete(id)
        return { message:`${isExist.productName} has been deleted successfully`}
    }

    async viewEachProduct(req,data){
        let id = req.params.id
        idValidator(id)
        let isYours  = await Product.findOne({userId:req.user.Id,productId:id})
       if(!isYours || isYours.length===0) throw new  CustomError("you have no product on ground", 404,false); 
        return {data:isYours,success:true,}
    }

    async viewAllProduct(req,data){
        let id = req.params.id
        idValidator(id)
        let isExist  = await Product.findOne({userId:req.user.Id,productId:id})
       if(isExist) throw new  CustomError("item is not on your list", 400,false); 
       await Product.findByIdAndDelete(id)
        return { message:`${isExist.productName} has been deleted successfully`}
    }
   

}


module.exports = new farmerServices()

