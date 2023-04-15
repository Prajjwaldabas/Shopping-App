const express= require('express');
const app = express();
const dotenv= require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');

const path = require('path')
const db = require('./Database/Mongoose');

dotenv.config({path: 'config.env'})
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({extended:true}));

//
app.use(cors());
app.use(cors({
  origin: 'https://e-commerce-app-q0tc.onrender.com'
}));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});


// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve the index.html file for all routes that are not found
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});


//  
app.use(express.json());

// app.use('/users', usersRouter);
app.use('/',require('./routes/index'))


app.listen (PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})