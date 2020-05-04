const mongoose = require('mongoose');
require('dotenv').config();

  const MONGO_USERNAME= process.env.MONGO_USERNAME;
  const MONGO_PASSWORD=process.env.MONGO_PASSWORD;
  const MONGO_HOSTNAME=process.env.MONGO_HOSTNAME;
  const MONGO_PORT=process.env.MONGO_HOSTNAME;
  const MONGO_DB=process.env.MONGO_DB;

  


//const { MONGO_USERNAME } = process.env      ;  

const { gato , perro } = 'jo';

const options = {
  useNewUrlParser: true,

  connectTimeoutMS: 10000,
  useNewUrlParser: true,
  useUnifiedTopology: true
};

//process.env.foo ='a';
//console.log(process.env.a);

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
//const url = " mongodb://localhost:27017/seminario"

mongoose.connect(url, options).then( function() {
  console.log('MongoDB is connected....' + process.env.MONGO_HOSTNAME +process.env.MONGO_DB + "1" + process.env.MONGO_USERNAME);
})
  .catch( function(err) {
  console.log(err);
});



