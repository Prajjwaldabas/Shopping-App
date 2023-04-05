import React from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {Link} from "react-router-dom"
 import { useState } from 'react';
 import Cart from "../Cart/Cart"

import "./Navbar.scss";


export default function Navbar() {

    const [open,setOpen]=useState(false)

  return (
    <div className='navbar'>
        
       <div className="wrapper">

       
       
       <div className='left'>
      
        <div className='item'>
            <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/india-flag-design-template-186e8b084e00b5e1f777ddf3f534b763_screen.jpg?ts=1625072969" alt="" width="25px"/>
       <KeyboardArrowDownIcon />
        </div>

        <div className='item'>
            <span>IND</span>
            <KeyboardArrowDownIcon />
        </div>


        <div className="item">
            <Link className='link' to="/product/1"> Women</Link>
        </div>

        <div className="item">
            <Link className='link' to="/product/2"> Men</Link>
        </div>
        <div className="item">
            <Link className='link' to="/product/3"> Kids</Link>
        </div>

        </div>  
        {/* left div closed */}

      
        <div className='Center'>
        <Link  className='link' to="/">My Store</Link>
        </div>  

      

    <div className='right'>

      <div className='item'>
        <Link className='link' to="/">Home</Link>
        </div>  

      <div className='item'>
        <Link className='link' to="/">About</Link>
        </div>  

      <div className='item'>
        <Link className='link' to="/">Contact</Link>
        </div>  

      <div className='item'>
        <Link className='link' to="/">Stores</Link>
        </div> 

      <div className='icons'>
      <SearchOutlinedIcon/>
      <PersonOutlineIcon/>
      <FavoriteBorderOutlinedIcon/>
      <div className="cartIcon" onClick={()=>setOpen(!open)}>
      <ShoppingCartOutlinedIcon/>
      <span>0</span>
      </div>

      </div>
      {/* icon closed div */}

   </div>
        {/* right div closed */}

     

    </div> 
    {/* wraapper closed  */}
     
        
       {open && <Cart/>} 
</div>
// nav bar
  )
}
