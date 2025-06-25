const mongoose = require('mongoose');

const SensorSchema=mongoose.Schema({
    sensor:String,
    location:String,
    value1:String,
    value2:String,
    value3:String
}, {timestamps:true})

module.exports = mongoose.model('datosensor',SensorSchema);