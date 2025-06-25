const express=require('express');
const  SensorDatos  = require('../controllers/SensorController');

const api=express.Router();

api.post('/datosensor',SensorDatos.createDataSensor)

module.exports=api;