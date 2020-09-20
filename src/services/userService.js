const User = require('../models/userModel')
const userCat = require('../models/userCategories')
const CustomError = require('../utility/CustomError')
const {emailValidator,passwordValidator,genderValidator,
       phoneNumberValidator,nameValidator,userCategoryValidator,
       addressValidator,loginpasswordValidator} = require('../utility/validator')
const Email = require('../utility/mailServices')
const config = require('../config/constants')
const Crypto = require("crypto");
const _ = require("lodash");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");



class UserServices{
    async register(req,data){
        data=_.pick(data,['email','password','con_password','userName','lastName','firstName','phoneNumber','address','gender','userCategory'])
        emailValidator(data)
        passwordValidator(data)  
        genderValidator(data)  
        phoneNumberValidator(data)  
        nameValidator(data)  
        addressValidator(data)  
        userCategoryValidator(data)  
        let isExist = await User.findOne({firstName:data.firstName,lastName:data.lastName});
       if(isExist) throw new  CustomError("name already choosen", 400,false); 
        if(await User.findOne({email:data.email})) throw new  CustomError("email already exist", 400,false);  
        else{
          const newUser= await new User(data)
        let catId= await userCat.findOne({name:data.userCategory})
          newUser.email= data.email.trim('')
          newUser.userCategoryId= catId._id
          await  newUser.save()
          return null
        }
    }
    async login(req,data){
     await emailValidator(data)
     loginpasswordValidator(data) 
        let user =await User.findOne({email:data.email})
          if(!user) throw  new CustomError("no user found", 404,false); 
        else{ let payload={ userName:user.userName, _id:user._id,role:user.role, email:user.email,}
        const token = jwt.sign(payload, process.env.jwtSecret, {expiresIn: config.accessTokenexpires_expiresIn});
          const refreshToken = jwt.sign(payload,process.env.jwtSecret, {expiresIn: config.refreshToken_expiresIn });
         
    user = _.pick(user, ["_id","email",'lastName','firstName','phoneNumber','address','gender','userCategoryId']);
          return{success:true,  status:200, data:{message:'you sucessfully logged in',
          user,
          token:`Bearer ${token}`,
          refreshToken:`Bearer ${refreshToken}`,}} 
        }
    }
    async updateProfile(req,data){
        return {
            message:'your details',success:true,status:201
        }
    }

    async forgetPassword(req,data){
     let {email} = data;
     if(!email) throw new CustomError("please specify your email", 400,false); 
     let isExist = await User.findOne({email:email});
     if(!isExist) throw new CustomError("you do not have an account with us", 400,false);
     return  {success:true,status:201}


  }

    async resetPassword(req,data){
      let token = req.params.id;
      let {newPassword1,newPassword2}=data;
      let tokenExist = await User.findOne({
        resetPasswordToken:token,
        // resetPasswordExpires:{gte:Date}
      });
      if(!tokenExist) throw new CustomError("token expires or an invalid link", 400,false); 
        
      if(newPassword1!== newPassword2) throw new CustomError("password does not match", 400,false); 
       tokenExist.password=newPassword1;
         tokenExist.save();
         return {success:true,status:201}

  }

}


module.exports = new UserServices()