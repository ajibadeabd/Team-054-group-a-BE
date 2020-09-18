const mongoose = require('mongoose')
const {Schema} = mongoose



const RoleModel  = new Schema({
    name:{
        type:String, 
        enum: ["farmer", "store owner"],
        trim: true,
        required: [true, "name is required"],
        default:'farmer'
    },
},
)



module.exports = mongoose.model('Role', RoleModel)