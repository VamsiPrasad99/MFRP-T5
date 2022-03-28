const { time } = require('eslint/lib/util/timing')
const mongoose = require('mongoose')

const flightsSchema = new mongoose.Schema({
    flightID : {type : Number},
    flightName : {type : String},
    arrival : {type : String},
    departure : {type : String},
    price : {type : Number},
    arrivalTime : {type : String},
    departureTime : {type : String},
    durationTime: {type: String},
    image :{type: String}

    
    
})

module.exports = mongoose.model('Flights', flightsSchema)