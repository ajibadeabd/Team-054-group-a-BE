const mongoose = require('mongoose')
const {Schema} = mongoose



const productModel  = new Schema({
    storeId:{
        type:Schema.Types.ObjectId, 
        required: [true, "userId  is required"],
        ref:"store"
    },
    name:{
        type:String, 
        trim: true,
        required: [true, "name is required"],
    },
    SKU:{
        type:String, 
        trim: true,
        required: [true, "SKU is required"],
    },
    price:{
        type:Number, 
        trim: true,
        required: [true, "price is required"],
    },
    unit:{
        type:Number, 
        trim: true,
        required: [true, "unit is required"],
        default:0
    },
    stockQuantity:{
        type:Number, 
        trim: true,
        required: [true, "stockQuantity is required"],
        default:0
    },
   
},
)



module.exports = mongoose.model('product', productModel)