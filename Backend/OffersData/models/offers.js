const { time } = require('eslint/lib/util/timing')
const mongoose = require('mongoose')

const offersSchema = new mongoose.Schema({
   
     offer:{type:String},
     offerdetails:{type:String},
     offercode:{type:String},
     validity:{type:Date},
     image: {type:String}
    
})

module.exports = mongoose.model('Offers', offersSchema)