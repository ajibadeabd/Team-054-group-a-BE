const mongoose = require('mongoose')
const {Schema} = mongoose



const salesModel  = new Schema({
    userId:{
        type:Schema.Types.ObjectId, 
        required: [true, "userId  is required"],
        ref:"user"
    },
    productId:{
        type:Schema.Types.ObjectId, 
        required: [true, "productId  is required"],
        ref:"product"
    },
    storeId:{
        type:Schema.Types.ObjectId, 
        required: [true, "storeId  is required"],
        ref:"store"
    },
    Quantity:{
        type:Number, 
        trim: true,
        required: [true, "Quantity is required"],
        default:0
    },
    price:{
        type:Number, 
        trim: true,
        required: [true, "price is required"],
    },
    transactionDate: {
        type: Date,
        default: Date.now,
      }
},
)



module.exports = mongoose.model('sales', salesModel)