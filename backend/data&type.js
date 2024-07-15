const mongoose = require('mongoose')

var logSchema=new mongoose.Schema({
    patientId: {type:Number},
    patientName: {type:String},
    age: {type:Number},
    bloodGroup: {type:String},
    address: {type:String},
    contact: {type:Number},
    issue: {type:String},
    status: {type:String}
})

const hospitals = mongoose.model('hospitals',logSchema)
module.exports=hospitals