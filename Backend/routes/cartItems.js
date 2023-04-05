//require express
const express= require("express");

const cartController= require("../controllers/cartItemsController")
//require router
const router = express.Router()

//api for save item in the cart
router.get('/save',cartController.create);


  module.exports = router;