import React from "react";
import "./Product.scss";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import { useEffect } from "react";
import { useParams } from "react-router-dom";


import { useState } from "react";
export default function Product() {
  const [selsectedImg, setSelectedImg] = useState(0);
  const [quantity, setquantity] = useState(1);

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProduct = async () => {
      const result= fetch(`http://localhost:5000/items/product/${id}`)
  .then(response => response.json())
  .then(data => {
    // handle the response data
    setProduct(data);
    console.log(data);
    
  })
  .catch(error => {
    console.error(error);
  });
    };

    fetchProduct();
  }, [id])


  

  // const images = [
  //   "https://images.pexels.com/photos/9558240/pexels-photo-9558240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //   "https://images.pexels.com/photos/9558601/pexels-photo-9558601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  // ];
  return (
    <div className="product">
      <div className="left">
      
        <div className="images">
          <img src={product.imageUrl} alt="" onClick={(e) => setSelectedImg(0)} />
          <img src={product.imageUrl} alt="" onClick={(e) => setSelectedImg(1)} />
        </div>
       

        <div className="mainImg">
          <img src={product.imageUrl} alt="" />
        </div>
      </div>

      <div className="right">

        <h1>Title</h1>
        <span className="price">$199</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          magni ullam amet consequatur pariatur, culpa, esse tempora
          consequuntur harum rem architecto temporibus odio debitis nihil vitae
          commodi quia obcaecati eum?
        </p>

        <div className="quantity">
            <button onClick={()=>setquantity(prev=>prev===1?1:prev-1)}>-</button>
           {quantity}
            <button onClick={()=>setquantity(prev=>prev+1)}>+</button>

        </div>
        <button className="add">
        <AddShoppingCartIcon/>ADD TO CART
        </button>
        <div className="links">
            <div className="item">
<FavoriteBorderIcon/> ADD TO WISH LIST
            </div>
            <div className="item">
<BalanceIcon/>  ADD TO COMPARE
            </div>
        </div>

<div className="info">
    <span>Vendor:Polo</span>
    <span>Product Type:T-Shirt</span>
    <span>Tag: T-Shirt,Women,Top</span>


</div>

 <hr/>
        <div className="info">
            <span>DESCRIPTION</span>
            <hr/>
            <span>ADDITIONAL INFORMATION</span>
            <hr/>
            <span>FAQ</span>
        </div>


      </div>
    </div>
  )
}
