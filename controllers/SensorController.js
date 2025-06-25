const SensorModel = require("../models/SensorModel");

async function createDataSensor(req,res){
   const datosSen= new SensorModel(req.body);
   
   try {
    await datosSen.save();
    res.send("Datos guardados correctamente")
    
    
   } catch (error) {
    console.log(error);
    //Solo es el error
   }
}

module.exports={
    createDataSensor
}

