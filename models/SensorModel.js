const mongoose = require('mongoose');

const SensorSchema=mongoose.Schema({
    sensor:String,
    location:String,
    pm1_0:String,
    pm2_5:String,
    pm10:String
}, {timestamps:true})

module.exports = mongoose.model('datosensor',SensorSchema);