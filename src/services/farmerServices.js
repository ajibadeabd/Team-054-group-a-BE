const Product = require('../models/product')
const CustomError = require('../utility/CustomError')
const {idValidator,statusValidator,stockQuantityValidator,
       productNameValidator,priceValidator,unitValidator} = require('../utility/validator')
const Email = require('../utility/mailServices')
const config = require('../config/constants')
const _ = require("lodash");



class farmerServices{
    async addProduct(req,data){
        data=_.pick(data,['productName','status','price','stockQuantity','unit'])
        productNameValidator(data)
        priceValidator(data)
        unitValidator(data)
        statusValidator(data)
        stockQuantityValidator(data)
        data.ownerId=req.user._id
        let saveProduct = await new Product(data)
        await saveProduct.save()

        return {message:`${saveProduct.productName} has been saved`,status:200,success:true}
    }

    async getProduct(req,data){
        data.ownerId=req.user._id
        let isYours = await Product.find({__v:0})
        if(!isYours || isYours.length===0) throw new  CustomError("you dont have any product", 404,false); 
        return {message:`all product fetch`,status:200,success:true,allproducts:isYours}
    }

    async editProduct(req,data){
        data=_.pick(data,['productName','status','price','stockQuantity','unit'])
        let id = req.params.productId
        idValidator(id)
        productNameValidator(data)
        priceValidator(data)
        unitValidator(data)
        statusValidator(data)
        stockQuantityValidator(data)
        let isExist  = await Product.findOne({ownerId:req.user.id,_id:id})
       if(!isExist) throw new  CustomError("you dont have this product on your list", 400,false); 
        isExist.price=data.price;
        isExist.name=data.name;
        isExist.unit=data.unit;
        isExist.productName=data.productName;
        isExist.stockQuantity=data.stockQuantity;
        isExist.status=data.status;
        await isExist.save()
        return null
    }

    async deleteEacProduct(req,data){
        let id = req.params.productId;
        idValidator(id);
        console.log(req.user.id)
        let isExist  = await Product.findOne({ownerId:req.user.id,_id:id})
       if(!isExist || isExist.length===0) throw new  CustomError("item is not on your list", 400,false); 
       await Product.findByIdAndDelete(id)
        return { message:`${isExist.productName} has been deleted successfully`,status:201,success:true}
    }

    async deleteAllProduct(req,data){
       
        console.log(req.user.id)
        let isYours  = await Product.findOne({ownerId:req.user.id})
       if(!isYours || isYours.length===0) throw new  CustomError("item is not on your list", 400,false); 
       await Product.deleteMany()
        return { message:`all product has been deleted successfully`,status:201,success:true}
    }

    async viewEachProduct(req,data){
        let id = req.params.id
        idValidator(id)
        let isYours  = await Product.findOne({ownerId:req.user.id,productId:id})
       if(!isYours || isYours.length===0) throw new  CustomError("you have no product on ground", 404,false); 
        return {data:isYours,success:true,status:200}
    }

    async viewAllProduct(req,data){
        let id = req.params.id
        idValidator(id)
        let isExist  = await Product.find({ownerId:req.user.id})
       if(isExist) throw new  CustomError("item is not on your list", 400,false); 
       await Product.findByIdAndDelete(id)
        return { message:`${isExist.productName} has been deleted successfully`,success:true,status:200}
    }
    
    async dashboard(req,data){
        // available','sold'
        let isAvailable  = await Product.find({ownerId:req.user.id,status:"available"},
        {__v:0,ownerId:0})
        let isSold  = await Product.find({ownerId:req.user.id,status:"sold"},
        {__v:0,ownerId:0})
        let myProductStore  = await Product.find({ownerId:req.user.id},
        {__v:0,_id:0,status:0,_id:0,unit:0,stockQuantity:0,ownerId:0,price:0,})
        return { data:{isAvailable,isSold,myProductStore},success:true,status:200}
    }
}

module.exports = new farmerServices()

