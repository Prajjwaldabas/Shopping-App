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

// Configure CORS middleware to allow all origins
app.use(cors({
  origin: '*'
}));

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve the index.html file for all routes that are not found
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

// Enable CORS preflight
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

// Enable JSON parsing middleware
app.use(express.json());

// Use the index route
app.use('/',require('./routes/index'))

// Start the server
app.listen(PORT,()=>{
  console.log(`Server is running on port: ${PORT}`)
});
