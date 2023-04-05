import React from 'react'

import { useState} from "react"

export default function ItemFrom() {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [imageUrl, setImageUrl] = useState('');


    const handleSubmit= async(event)=> {
   
        fetch('http://localhost:5000/items/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            price: price,
            description: description,
            imageUrl: imageUrl
          })
        })
          .then(response => response.json())
          .then(result => {
            console.log(result);
            setIsPopupOpen(false);
          })
          .catch(error => console.error(error));
      };

      const cancelEdit=(event)=>{
        
        setIsPopupOpen(false);
        
      }
    
  return (
   

     
        <div >
         <form className="popup-form" onSubmit={handleSubmit}>
        
        <label htmlFor="Name">Product Name:
          <input type="text"  value={name} name='name'   onChange={event => setName(event.target.value)}/>
        </label>
        <label htmlFor="Price">      Price:
          <input type="number" value={price} name='price' onChange={event => setPrice(event.target.value)} />
        </label>
        <label htmlFor="Name">  Description:
          <input type="text" value={description} name='description' onChange={event => setDescription(event.target.value)}/>
        </label>
        <label htmlFor="Image">    ImageUrl:
          <input type="text" value={imageUrl} name='imageUrl' onChange={event => setImageUrl(event.target.value)}/>
        </label>
        <button type='submit'>Add Product </button>
        <button className='cancel_btn' onClick={cancelEdit}>X</button>

         </form>
        </div>
    
        
   
  )
}
