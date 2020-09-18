const mongoose = require('mongoose')
const {Schema} = mongoose



const userRoleModel  = new Schema({
    userId:{
        type:Schema.Types.ObjectId, 
        required: [true, "userId  is required"],
        ref:"user"
    },
    roleId: {
        type: Schema.Types.ObjectId,
       required: [true, "roleId  is required"],
       ref: "Role",
     },
   
},
)



module.exports = mongoose.model('userRole', userRoleModel)