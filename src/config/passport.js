const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User  = require("../models/userModel");
const config  = require("../config/constants");
const key= process.env.jwtSecret;
  const opts={};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken() 
  opts.secretOrKey=config.JwtStrategy
  module.exports = passport=>{
      passport.use(
          new JwtStrategy(opts,(jwt_payload,done)=>{
 console.log(process.env.jwtSecret);

     User.findById(jwt_payload._id)
     .then((user)=>{
         if(user)
            return done(null,user)
 console.log(process.env.jwtSecret);
         return done(null,false);

     })
     .catch(err=>{
         console.log(err)
     })
          })
      )
  }