const express = require('express');
const app = express();
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path')
const db = require('./Database/Mongoose');

dotenv.config({ path: 'config.env' })
const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.use(cors({
  origin: ['http://localhost:3000', 'https://e-commerce-app-q0tc.onrender.com']
}));

app.use(express.json());

app.use('/', require('./routes/index'))

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`)
})
