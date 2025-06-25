const express=require('express');
const  SensorDatos  = require('../controllers/SensorController');

const api=express.Router();

api.post('/datosensor',SensorDatos.createDataSensor);
api.get('/getsensor',SensorDatos.getDatosSensor);

module.exports=api;