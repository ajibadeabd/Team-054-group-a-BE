const mongoose = require('mongoose')
const {Schema} = mongoose



const shoppingCartModel  = new Schema({
    userId:{
        type:Schema.Types.ObjectId, 
        required: [true, "userId  is required"],
        ref:"user"
    },
    productId: {
        type: Schema.Types.ObjectId,
       required: [true, "productId  is required"],
       ref: "product",
     },
    quantity:{
        type:Number, 
        trim: true,
        required: [true, "quantity is required"],
        default:0
    },
    price:{
        type:Number, 
        trim: true,
        required: [true, "price is required"],
    },
   
},
)



module.exports = mongoose.model('shoppingCart', shoppingCartModel)