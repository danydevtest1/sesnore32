const mongoose  = require("mongoose")


async function connectDB(){
    try {
        const {connection}=await mongoose.connect(process.env.DATABASE_URL);
        const url=`${connection.host}:${connection.port}`;
        console.log(`MOngodb conectado en ${url}`);
        
    } catch (error) {
        console.log(error);
    }
}
module.exports={
    connectDB
}