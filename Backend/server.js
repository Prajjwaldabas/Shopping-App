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
    origin: ['http://localhost:3000' , 'https://my-shopping-app-ec57.onrender.com']
  }));




//  
app.use(express.json());


app.use(express.static(path.join(__dirname, '../frontend/e-commerce-frontend/public')));

// // app.use('/users', usersRouter);
app.use('/',require('./routes/index'))




// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../frontend/e-commerce-app-frontend/public/index.html'));
// });



app.listen (PORT,()=>{
    console.log(`Server is running on port: ${PORT}`)
})