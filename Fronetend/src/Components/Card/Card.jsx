import React from 'react'
import "./Card.scss"
import { Link } from 'react-router-dom'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useState } from 'react';


export default function Card({item}) {
  const [selectedItem, setSelectedItem] = useState(null);




  const deleteItem = async (id,event) => {
   event.preventDefault()
    try {
      const response = await fetch(`http://localhost:5000/items/delete/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      console.log(data);
      window.location.reload();
      // code to update state or UI after deleting the item
    } catch (error) {
      console.error(error);
    }
  };



  const handleEdit= async(id,event)=>{
   
    // event.preventDefault();
    

     const response = await fetch(`http://localhost:5000/items/update/${item._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(selectedItem)
  });
  const result = await response.json();
  console.log("updatedItem",result);
  setSelectedItem(null);
  window.location.reload();
  console.log("edit button clicked")
  }

  const cancelEdit=()=>{
    setSelectedItem(null);
  }

  return (
    <div className='CardWrap'>
{selectedItem && (
  <form >
    <h2>Edit Product</h2>
    <input type="text" value={selectedItem.name} onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })} />
    <input type="text" value={selectedItem.price} onChange={(e) => setSelectedItem({ ...selectedItem, price: e.target.value })} />
    <input type="text" value={selectedItem.description} onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })} />
    <input type="text" value={selectedItem.imageUrl} onChange={(e) => setSelectedItem({ ...selectedItem, imageUrl: e.target.value })} />
    <button type="submit" onClick={handleEdit}>Save</button>
    <button className='cancel_btn' onClick={cancelEdit}>X</button>
  </form>
)}

<div className="additems">
   
   <button className="addcart" >
<AddShoppingCartIcon/>
       </button>
       <button className="edititem" onClick={(event) => setSelectedItem(item,event)}
> 
<EditIcon/>
       </button>
     <button className="deleteitem" onClick={(event) => deleteItem(item._id,event)}> 
<DeleteIcon/>
       </button> 
       

     </div>

<Link className="link" to={`/product/${item._id}`} >
<div className='card'>

    <div className="image">
   
   



    {item.isNew &&  <span className='newSeason'>New Season</span>}
        <img src={item.imageUrl} alt="" className="mainImg" />
        { <img src={item.img2} alt="" className="secondImg" /> }
    </div>

    <h2>{item.name}</h2>
    <div className="prices">
    <h3>${item.oldPrice}</h3>
        <h3>${item.price}</h3>
    </div>
</div>
    </Link>
    </div>
    
  )
}
