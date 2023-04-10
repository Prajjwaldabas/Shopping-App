const mongoose = require('mongoose');

//item schema
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
 
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
   
  },
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
