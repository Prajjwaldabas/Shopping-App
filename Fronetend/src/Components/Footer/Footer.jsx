import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='footer'>

<div className="top">
<div className="item">
<h1>Categories</h1>
<span>Women</span>
<span>Men</span>
<span>Shoes</span>
<span>Accessories</span>
<span>New Arrivals</span>
</div>



<div className="item">
<h1>Links</h1>
<span>FAQ</span>
<span>Pages</span>
<span>Stores</span>
<span>Compare</span>
<span>Cookies</span>

</div>

<div className="item">
    <h1>About</h1>
    <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi architecto ad inventore debitis similique libero, voluptate aspernatur excepturi, cum aliquid dolores hic voluptatum quidem. Corporis quaerat velit tempora quae. Perspiciatis
    </span>
</div>
<div className="item">
    <h1>Contact</h1>
    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illo obcaecati temporibus, odio a et harum at exercitationem quae delectus, accusamus sit molestiae, ullam voluptatem eius adipisci ex quo quod?</span>
</div>

</div>
<div className="bottom">

<div className="left">
    <span className='logo'>
My Store
    </span>
<span className="copyright">
© 2023 All Rights Reserved 
</span>
</div>

<div className='right'>
<img src="https://www.pngitem.com/pimgs/m/291-2918799_stripe-payment-icon-png-transparent-png.png" alt="" width="550px" height="50px"/>
</div>

</div>

    </div>
  )
}

