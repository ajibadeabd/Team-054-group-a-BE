const { Mongoose } = require('mongoose');
const CustomError = require('./CustomError')


    exports.emailValidator =async (data)=>{
        const emailRegex = /[\w|.]+[@]+\w+[.]+[\w|.]*$/gm;
        if (!data.email) throw new CustomError("please provide your email");
        const isEmailValid = await emailRegex.test(data.email);
        if (!isEmailValid) {throw new CustomError("please provide a valid email"); }
}

exports.passwordValidator =(data)=>{
    if(!data.password) throw new CustomError("enter your password", 400,false);
    if(!data.con_password) throw new  CustomError("please confirm  your password", 400,false);
   if(data.password  !== data.con_password) throw new CustomError("password dont match", 400,false);
}
exports.loginpasswordValidator =(data)=>{
    if(!data.password) throw new CustomError("enter your password", 400,false);
}
exports.genderValidator =(data)=>{
    if(!data.gender) throw new CustomError("enter your gender", 400,false); 
}
exports.phoneNumberValidator =(data)=>{
    
    if(!data.phoneNumber  || isNaN(data.phoneNumber) || data.phoneNumber.length<11 || data.phoneNumber.length>12) 
    throw new CustomError("provide a valid phoneNumber", 400,false); 
}
exports.nameValidator =(data)=>{
    if(!data.firstName) throw new CustomError("enter your firstName", 400,false); 
        if(!data.lastName) throw new CustomError("enter your lastName", 400,false); 
}
exports.addressValidator =(data,next)=>{
    if(!data.address) throw new CustomError("provide your address", 400,false); 
}
exports.userCategoryValidator =(data)=>{
    let usercat = ['farmer','storeOwner']
    if(!usercat.includes(data.userCategory)) throw new CustomError("provide a good user cat", 400,false);
}

exports.idValidator =(id)=>{
   let isValid = Mongoose.type.o
    if(!isValid) throw new CustomError("invalid id", 400,false);
}
