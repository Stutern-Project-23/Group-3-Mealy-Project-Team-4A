import React from 'react'
import "../styles/checkout.css"
import Footer from "./Footer"
import back from "../images/back.svg"
import { useSelector } from 'react-redux'

function Checkout() {
  const {cartItems}=useSelector((state)=>state.cart)
  console.log(cartItems[0].type)
  return (
    <div className='checkout-container'>
<nav className='checkout-nav'></nav>
<div className='checkout-content'>
<div className='back-container'><img src={back} className='back' alt='go back'/><p>Order Summary</p></div>
<h3>BreakfastHub</h3>
<div className='orders-details-container'>
<div className='orders-details'>
  <p>{cartItems.length} Orders from breakfast hub</p>
  {cartItems.map((item)=>(
     <div key={item.id}>
     <p className='order'>{item.type}</p>
     </div>
  ))}


</div>
<div className='orders-summary'>SUMMARY</div>
</div>
</div>
      <Footer/>
    </div>
  )
}

export default Checkout