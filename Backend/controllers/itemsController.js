const Item= require("../models/Item");


//function to find all items from database
module.exports.find=(req,res)=>{

    Item.find()
    .then(data=>{
        res.send(data)
        console.log('items found',data)
    })
    .catch(err=>{
        console.log(err,"error in finding the items")
    })

}

//function to create new item in the database
module.exports.create= (req,res)=>{

 console.log( req.body)
    const newItem = new Item({
        
        name: req.body.name,
        price: req.body.price,
        description: req.body.description,
        imageUrl: req.body.imageUrl,
      });
      
      newItem.save()
        .then(item => {
          
          console.log('Item created:', item);
          res.json(item);
        })
        .catch(err => {
          console.error(err,"Error in creating new item");
        });  

}

// function to delete the itemm from database
module.exports.delete= (req,res)=>{

    const id = req.params.id;

    Item.findByIdAndDelete({_id:id})
    .then(item => {
      console.log('Item deleted:', item);
      res.status(200).send({ message: `product deleted successfuly` });
    })
    .catch(err => {
      console.error(err);
    });

}


// // update a new project by project id
module.exports.update = (req, res) => {
  if (!req.body) {
    return res.status(404).send({ message: "Data to update can not be empty" });
  }
  const id = req.params.id;
  Item.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({
            message: `Canot update product ${id}.Maybe product not found `,
          });
      } else {
        res.status(200).send({ message: `product updated successfuly` });
        console.log("product updated")
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error update the product " });
    });
};


//function to show details for a specific item
module.exports.Details = (req, res) => {
  Item.findById(req.params.id)
    .then(item => {
      if (!item) {
        return res.status(404).json({ message: 'Item not found' });
      }
      res.json(item);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    });
};