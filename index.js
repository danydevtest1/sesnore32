const app=require('./server');
const mongoose=require('mongoose');

const port = process.env.PORT || 4000;
const uri=`mongodb+srv://root:j9brKQAx7yo8d4Yl@cluster0.vmfbogk.mongodb.net/uptask_mern`;
mongoose.connect(uri)
.then(mongoose=>console.log('Conectado a la bd en el puerto 27017'))
.catch(err=>console.log(err));

app.listen(port, ()=>{
    console.log("*******************");
    console.log("***API REST********");
    console.log("*******************");
    console.log(`http://localhost:${port}/api`);
})
