const mongoose = require('mongoose')
const {Schema} = mongoose



const shoppingCartModel  = new Schema({
    name:{
        type:String, 
        trim: true,
        required: [true, "name is required"],
    },
    userId:{
        type:Schema.Types.ObjectId, 
        required: [true, "userId  is required"],
        ref:"user"
    },
     details:{
        type:String, 
        trim: true,
        required: [true, "details is required"],
    },
    
   
},
)



module.exports = mongoose.model('store', shoppingCartModel)