const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const db = require('./db');
require('dotenv').config();



const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());

//routes
const tarea = require('./routes/TareaRouter'); 

app.use('/Tarea', tarea);






// mongoose.connect('mongodb://localhost:27017/seminario',{
//     useNewUrlParser :true,
//     useFindAndModify: false,
//     useUnifiedTopology: true 
// },(err) => {
//     if(err){
//         console.log('no se puede conectar a la base de datos');
//         process.exit(1);
//     }else
//         console.log('se a conectado exitosamente a la base de datos');
// }) // 12:30 https://www.youtube.com/watch?v=35BSnmTbjlE

const port = process.env.PORT || 8080;

// Hello word express test 



// Validacion de mongoos
app.listen(port, () => {
  console.log(`app esta conectado ${port} + ${process.env.MONGO_DB}`);
});








