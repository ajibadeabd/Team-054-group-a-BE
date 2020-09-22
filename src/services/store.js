const Store = require('../models/stores')
const Product = require('../models/product')
const CustomError = require('../utility/CustomError')
const {idValidator,detailsValidator,storeNameValidator} = require('../utility/validator')
const Email = require('../utility/mailServices')
const config = require('../config/constants')
const _ = require("lodash");



class storeServices{
    async createEachUserStore(req,data){
        let myStore = await Store.findOne({storeOwnerId:req.user.id});
        if(myStore) throw new CustomError("you already created a store",400);
        detailsValidator(data)
        let {details}= req.body;
        let storeName= `${req.user.lastName}-${req.user.firstName} store`
        let storeOwnerId = req.user.id;
        let eachStore = new Store({name:storeName,details:details ,storeOwnerId:storeOwnerId});
        eachStore.save();
          return {status:200,success:true}
    }

    async getEachUserStore(req,data){
        let myStore = await Store.find({storeOwnerId:req.user.id})
                            .populate('farmerId',{firstName:1,lastName:1})
                            .select('details')
                            .select('name')
        if(!myStore || myStore.length==0) throw new CustomError("you dont have any store yet",404);
        return {myStore,status:200,success:true}
    }

   
}

module.exports = new storeServices()

