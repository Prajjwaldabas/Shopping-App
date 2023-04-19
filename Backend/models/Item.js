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
  secimageUrl: {
    type: String,
   
  },
  category: {
    type: String,
   
  },
  subCategory:{
    type:String,
  }
});

const Item = mongoose.model('Item', itemSchema);

module.exports = Item;
