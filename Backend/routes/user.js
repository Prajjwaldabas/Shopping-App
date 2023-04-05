//require express
const express= require("express");

//require router
const router = express.Router()

//api for creating the user
router.get('/create', (req, res) => {
    res.send('creating users page');
  });


  module.exports = router;