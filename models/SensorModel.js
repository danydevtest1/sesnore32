const mongoose = require('mongoose');

const SensorSchema=mongoose.Schema({
    sensor:String,
    location:String,
    pm1:String,
    pm2:String,
    pm10:String
}, {timestamps:true})

module.exports = mongoose.model('datosensor',SensorSchema);