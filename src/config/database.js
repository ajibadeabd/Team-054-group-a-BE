const mongoose = require('mongoose')
const config = require('../config/constants')
const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  };
 
module.exports = function (){
// let url=''
//     if(process.env.NODE_EVN==='production'){
        let url=config.atlasdatabaseURI      
//     }else
//     url=config.localdatabaseURI     

    mongoose.connect(url,options)
    .then(() => {
        console.log("database established")
    })
    .catch(err => {
        console.log("There was an error while connecting to the database.",`${process.env.localDATABASE}`)
    })
}