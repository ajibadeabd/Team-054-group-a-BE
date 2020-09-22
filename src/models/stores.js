const mongoose = require('mongoose')
const {Schema} = mongoose



const shoppingCartModel  = new Schema({
    name:{
        type:String, 
        trim: true,
        required: [true, "name is required"],
    },
    farmerId:{
        type:Schema.Types.ObjectId, 
        // required: [true, "farmerId  is required"],
        ref:"user"
    },
    storeOwnerId:{
        type:Schema.Types.ObjectId, 
        required: [true, "storeOwnerId  is required"],
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