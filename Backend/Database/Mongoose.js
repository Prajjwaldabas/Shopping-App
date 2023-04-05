
//connceting mongo db 
const mongoose = require ('mongoose');
const dotenv=require('dotenv')
dotenv.config({path: 'config.env'})
mongoose.connect(process.env.MONGO_URL)

const db = mongoose.connection;

db.on('error',console.error.bind(console,"Error connecting to Mongodb"));

db.once('open',function(){
    console.log("Successfully connect to the database")
});

module.exports=db;