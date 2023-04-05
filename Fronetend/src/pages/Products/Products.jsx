import React from 'react'
import "./Products.scss"
import { useState} from "react"
import { useParams } from "react-router-dom"
import List from "../../Components/List/List"
import ItemForm from '../../Components/ItemForm/ItemForm'




export default function Products() {


  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const  catId=parseInt(useParams().id);
  const [maxPrice,setMaxPrice]=useState(1000);
  const [sort,setSort]=useState(null)
  
 


  return (
    <div className='products'>
<div className="left">
  <div className="filterItem">
    <h2>Product Categories</h2>
    <div className="inputItem">
      <input type="checkbox" id="1" value={1} />
      <label htmlFor="1">Shoes</label>
    </div>
    <div className="inputItem">
      <input type="checkbox" id="2" value={2} />
      <label htmlFor="3">Skirts</label>
    </div>
    <div className="inputItem">
      <input type="checkbox" id="3" value={3} />
      <label htmlFor="3">Coats</label>
    </div>
  </div>
  <div className="filterItem">
    <h2>Filter by price </h2>
    <div className="inputItem">
      <span>0</span>
      <input type="range" min={0} max={1000} onChange={(e)=>setMaxPrice(e.target.value)} />
      <span>{maxPrice}</span>
    </div>
  </div>
  <div className="filterItem">
   <h2>Sort by</h2>

   <div className="inputItem">
    <input type="radio" id="asc" name="price" onChange={(e)=>setSort("asc")}/>
    <label htmlFor="asc"> Price(Lowest first)</label>
   </div>

   <div className="inputItem">
    <input type="radio" id="desc" name="price" onChange={(e)=>setSort("desc")}/>
    <label htmlFor="desc"> Price(Highest first)</label>
   </div>

  </div>
</div>
<div className="right">
<button onClick={() => setIsPopupOpen(true)} className="addNew">Add New Product +</button>
 

{isPopupOpen ? < ItemForm/> : null}

  <img className="catImg" src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />

  <List catId={catId}  maxPrice={maxPrice} sort={sort}/>
</div>

    </div>
  )
}


