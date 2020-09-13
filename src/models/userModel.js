const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require("bcryptjs");



const userModel  = new Schema({
    userName:{
        type:String, 
        trim: true,
        required: [true, "Fullname is required"]
    },
    gender:{
        type:String, 
        enum: ["male", "female", "others"],
        trim: true,
        // required: [true, "Gender is required"]
    },
    email:{
        type:String,
        trim: true,
        required: [true, "Email is required"],
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
    },
    phone: {
        type:String,
        trim: true,
        // required: [true, "Phone is required"]
    },
    country: {
        type:String,
        trim: true,
        // required: [true, "Country is required"]
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    password: {
        type:String,
        trim: true,
        required: [true, "Password is required"]
    },
    
    
})
// Encrypt password using bcrypt

userModel.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 10);
  });


module.exports = mongoose.model('user', userModel)