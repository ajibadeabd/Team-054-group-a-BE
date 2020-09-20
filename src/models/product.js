const mongoose = require('mongoose')
const {Schema} = mongoose



const productModel  = new Schema({
    storeId:{
        type:Schema.Types.ObjectId, 
        // required: [true, "userId  is required"],
        ref:"store"
    },
    ownerId:{
        type:String, 
        trim: true,
        required: [true, "name is required"],
    },
    productName:{
        type:String, 
        trim: true,
        required: [true, "name is required"],
    },
    SKU:{
        type:String, 
        trim: true,
        // required: [true, "SKU is required"],
    },
    status:{
        type:String, 
        enum:['available','sold'],
        default:'available',
        required: [true, "status is required"],
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