const User = require('../models/userModel')
const CustomError = require('../utility/CustomError')
const Email = require('../utility/mailServices')
const Crypto = require("crypto");
const _ = require("lodash");



class UserServices{
    async login(req,data){
        data=_.pick(data,['email','password','con_password','userName'])

        if(!data.email) return new  CustomError("enter your email", 400,false);
        if(!data.password) return new CustomError("enter your password", 400,false);
        if(!data.con_password) return new  CustomError("please confirm  your password", 400,false);
        if(!data.userName) return new CustomError("enter your userName", 400,false); 
       if(data.password  !== data.con_password) return new CustomError("password dont match", 400,false);  
       if(await User.findOne({userName:data.userName})) return new  CustomError("userName already Taken", 400,false); 
        if(await User.findOne({email:data.email})) return new  CustomError("email already exist", 400,false); 
        
        else{
          const newUser= await new User(data)
          newUser.email= data.email.trim('')
          const token = jwt.sign({ id: newUser._id,role:newUser.role },  process.env.jwtSecret, { expiresIn: 3600, });
          await  newUser.save()
          const liveUrl = `https://automart.com/verify-email/${token}`;
          const url = `http://localhost:3000/verify-email/${token}`;
        await new Email(data, liveUrl).verify_email();
        await new Email(data, url).verify_email();
          // send mail to user email
                    return{status:201,success:true,data:{
                        token:newUser.token
                         },
                         message:'you have succefully registerd, a message has been sent to your mail, please click on the link verify your email '
                    
                    }
                    
        }
       
    }

}


module.exports = new UserServices()