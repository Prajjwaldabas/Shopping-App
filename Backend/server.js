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
    origin: ['http://localhost:3000','https://e-commerce-server-hhpk.onrender.com','https://e-commerce-app-q0tc.onrender.com']
  }));

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, 'client/build')));

// // Serve the index.html file for all routes that are not found
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname+'/client/build/index.html'));
// });


//  
app.use(express.json());


app.use(express.static(path.join(__dirname, 'ShoppingAPP/frontend/e-commerce-app-frontend/public')));

// app.use('/users', usersRouter);
app.use('/',require('./routes/index'))

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'ShoppingAPP/frontend/e-commerce-app-frontend/public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})




app.listen (PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})