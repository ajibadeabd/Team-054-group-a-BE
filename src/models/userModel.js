const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs");
const userModel  = new Schema({
    firstName:{
        type:String, 
        trim: true,
        required: [true, "firstname is required"]
    },
    lastName:{
        type:String, 
        trim: true,
        required: [true, "lastname is required"]
    },
    gender:{
        type:String, 
        enum: ["male", "female", "others"],
        trim: true,
        required: [true, "Gender is required"]
    },
    phoneNumber:{
        type:String, 
        trim: true,
        required: [true, "Phone Number is required"]
    },
    address:{
        type:String, 
        trim: true,
        required: [true, "address Number is required"]
    },
    email:{
        type:String,
        trim: true,
        required: [true, "Email is required"],
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    password: {
        type:String,
        trim: true,
        required: [true, "Password is required"]
    },

    resetPasswordToken: String,
    
    resetPasswordExpires: Date,

    userCategoryId: {
        type: Schema.Types.ObjectId,
       required: [true, "userCategoryId  is required"],
       ref: "userCategory",
     },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})
// Encrypt password using bcrypt

userModel.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
  });


module.exports = mongoose.model('user', userModel)