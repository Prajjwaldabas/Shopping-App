import React from 'react'
import "./Cart.scss"
import DeleteIcon from '@mui/icons-material/Delete';

export default function Cart() {
    const data=[
        {
            id: 3,
            title: "Coat",
            price: 15.99,
            oldPrice:19,
            description:
              "Women's clothing",
            category: "Women's clothing",
            img: "https://images.pexels.com/photos/1457983/pexels-photo-1457983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: { rate: 2.1, count: 430 },
          }, {
            id: 2,
            title: "T-shirt",
            oldPrice:23,
            price: 55.99,
            isNew:true,
            description:
              "outerwear jackets",
            category: "men's clothing",
            img: "https://images.pexels.com/photos/1759622/pexels-photo-1759622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: { rate: 4.7, count: 500 },
          },
    ]
  return (
    <div className='cart'>
     <h1>Products in your cart</h1>
     {data?.map(item=>(
        <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="details">
                <h1>
                    {item.title}
                </h1>
                <p> {item.description?.substring(0,100)}</p>
                <div className="price">
                    1 X ${item.price}
                </div>
            </div>
            <DeleteIcon className='delete'/>
        </div>
     ))}
     <div className="total">
        <span>SUBTOTAL</span>
        <span>$123</span>
     </div>
     <button>PROCEED TO CHECKOUT</button>
     <span className='reset'>Reset
     
     </span>


    </div>
  )
}
