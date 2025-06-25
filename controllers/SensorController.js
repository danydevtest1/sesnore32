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

async function getDatosSensor(req,res) {
    try {
    const dSensores=await SensorModel.find({});
        res.json(dSensores);
    } catch (error) {
        console.log(error);
        
    }
}
module.exports={
    createDataSensor,
    getDatosSensor
}

