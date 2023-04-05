//creating item in the cart

const cartItem = require("../models/CartItems")

module.exports.create= (req,res)=>{

    const newcartItem = new cartItem({
        
      });
      
      newcartItem.save()
        .then(item => {
          console.log('Item created:', item);
        })
        .catch(err => {
          console.error(err,"Error in creating new  cartitem");
        });  

}