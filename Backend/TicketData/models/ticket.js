const { time } = require('eslint/lib/util/timing')
const mongoose = require('mongoose')

const ticketSchema = new mongoose.Schema({
    flightID : {type : Number},
    flightName : {type : String},
    arrival : {type : String},
    departure : {type : String},
    price : {type : Number},
    arrivalTime : {type : String},
    departureTime : {type : String},
    durationTime: {type: String},
    email : {type: String},
    phno : {type: String},
    noofpassengers: {type : String},
    title: {type: String},
    fname: {type:String},
    lname: {type:String},
    title1: {type: String},
    fname1: {type:String},
    lname1: {type:String},
    title2: {type: String},
    fname2: {type:String},
    lname2: {type:String},
    fareprice: {type : Number},
    discountedamount: {type : String},
    totalprice: {type: Number}

  

    
    
})

module.exports = mongoose.model('Ticket', ticketSchema)