import React from 'react'
import "./List.scss";
import Card from "../Card/Card"
import Loader from '../Loader/Loader';
import { useState } from 'react';
import { useEffect } from 'react';

import { getAllProducts } from '../../api';




export default function List({isPopupOpen},{itemId}) {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
 
useEffect(() => {

  const fetchProducts = async () => {
    const data = await getAllProducts();
    setItems(data)
    setLoading(false);
  };
  fetchProducts();
},[]);
 
if (loading) {
  return <Loader />;
}
  return (
    <div className='list'>{items?.map(item=>{
       return  <Card item={item}  key={item._id}/>
    })}</div>
  )
}
