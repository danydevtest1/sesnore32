const express=require('express');
const cors= require('cors');
const bodyParser=require('body-parser');
const dotenv =require("dotenv");
const connectDB=require('./config/db');
const path=require('path');

const sensorRoutes=require("./routes/SensorRoutes");


const app=express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(cors());

app.use('/api',sensorRoutes);

module.exports=app;