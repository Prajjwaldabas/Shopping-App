//require express
const express= require("express");

//require controller
const itemController= require('../controllers/itemsController')


//require router
const router = express.Router()

// api for creating new item
router.post('/create',itemController.create);

//api for delete all items
router.delete('/delete/:id',itemController.delete);

//api to find all items form db
router.get('/all',itemController.find);

//api to update the desire item 
router.put('/update/:id',itemController.update)

//api to show product details
router.get('/product/:id',itemController.Details)

  module.exports = router;