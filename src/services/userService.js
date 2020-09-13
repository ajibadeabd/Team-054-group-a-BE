const User = require('../models/userModel')
const CustomError = require('../utility/CustomError')
const Email = require('../utility/mailServices')
const Crypto = require("crypto");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



class UserServices{
    async register(req,data){
        data=_.pick(data,['email','password','con_password','userName'])

        if(!data.email) throw new CustomError("enter your email", 400,false);
        if(!data.password) throw new CustomError("enter your password", 400,false);
        if(!data.con_password) throw new  CustomError("please confirm  your password", 400,false);
        if(!data.userName) throw new CustomError("enter your userName", 400,false); 
       if(data.password  !== data.con_password) throw new CustomError("password dont match", 400,false);  
       if(await User.findOne({userName:data.userName})) throw new  CustomError("userName already Taken", 400,false); 
        if(await User.findOne({email:data.email})) throw new  CustomError("email already exist", 400,false); 
        
        else{
          const newUser= await new User(data)
          newUser.email= data.email.trim('')
          await  newUser.save()
                    return{status:201,success:true,
                    message:'you have succefully registerd, a message has been sent to your mail, please click on the link verify your email '
                    
                    }
        }
    }
    async login(req,data){
        if(!data.email)  throw new CustomError("provide an email", 400,false); 
        if(!data.password) throw new CustomError("provide a password", 400,false); 
        let user =await User.findOne({email:data.email})
          if(!user) throw  new CustomError("no user found", 404,false); 
        else{ let payload={ userName:user.userName, _id:user._id,role:user.role, email:user.email,}
        const token = jwt.sign(payload, process.env.jwtSecret, {expiresIn: 3600000000000000000  });
          const refreshToken = jwt.sign(payload,process.env.jwtSecret, {expiresIn: 3600000000000000000 });
         
    user = _.pick(user, [
      "_id",
      'userName',
      "email",
      "role","block","isEmailVerified"
    ]);
          return{success:true,  status:200, data:{message:'you sucessfully logged in',
          user,
          token:`Bearer ${token}`, refreshToken:`Bearer ${refreshToken}`,}} 
        }
    }

}


module.exports = new UserServices()