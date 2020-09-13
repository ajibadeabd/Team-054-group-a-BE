const mongoose = require('mongoose')
const config = require('../config/constants')

const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  };
module.exports = function (){
    mongoose.connect(config.databaseURI,options)
    .then(() => {
        console.log("database established")
    })
    .catch(err => {
        console.log("There was an error while connecting to the database.")
    })
}