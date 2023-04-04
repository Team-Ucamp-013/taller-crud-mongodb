const mongoose = require('mongoose');
require('dotenv').config(); 

const url = `mongodb+srv://DanyPM:${process.env.DB_PASSWORD}@cluster0.gsn0mmj.mongodb.net/?retryWrites=true&w=majority`
console.log("------>",url)

mongoose.connect(url)
.then(()=>{
    console.log('-----------------------')
    console.log('Base de datos conectada')
    console.log('-----------------------')
})
.catch((error)=>{
    console.error(error)
})

module.exports = mongoose
