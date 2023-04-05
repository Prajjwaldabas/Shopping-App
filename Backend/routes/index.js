//require express
const express= require("express");

//require router
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("home page")
})


router.use('/user',require("./user"));
router.use('/items',require("./items"));
router.use('/cartItems',require("./cartItems"));









module.exports = router;