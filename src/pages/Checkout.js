import React, { useState } from 'react'
import "../styles/checkout.css"
import '../styles/buttons.css'
import Footer from "../components/Footer"
import back from "../images/back.svg"
import { useSelector ,useDispatch} from 'react-redux'
import minus from '../images/minus.png'
import plus from '../images/add.png'
import { useNavigate } from 'react-router-dom'
import mealy from  '../images/logodark.svg'
import { ButtonPill } from '../components/Buttons'
import orderlocation from '../images/order-location.svg'
import phone from '../images/phone.svg'
import payment from '../images/payment.svg'
import Map from '../components/Map'
import { Address } from '../redux/slices/userData'
import options from '../images/options.svg'
import cash from '../images/cash.png'
import newcard from '../images/newcard.svg'
import { Order } from '../redux/slices/orderSlice'


function Checkout() {
  const deliveryPrice = 400;
  const serviceFee = 50;
  const totalPrice = useSelector((state) => state.newCart.totalPrice);
  const totalPriceWithFees = totalPrice + deliveryPrice + serviceFee
 
const {items} = useSelector((state) => state.newCart);
const [showPayment,setShowPayment]=useState(false)
  const navigate = useNavigate();

  const dispatch=useDispatch(); 
  const handleGoBack = () => {
    navigate("/home/deliveryOrder");
  };
  const {userAddress}=useSelector((state)=>state.userData)
  const showAddress = (event) => {
    dispatch(Address(event.target.value));
  };
  function togglePayment(){
    setShowPayment(!showPayment)
  }
  function showConfirmModal(){
    dispatch(Order('openConfirmOrder'))
  }

  // Calculate the overall total price of all food products
  // const overallTotalPrice = totalPricePerItem.reduce((total, price) => total + price, 0);

  let price=0;
  return (
<div className='checkout-container'>
<nav className='checkout-nav'><img src={mealy} alt='mealy logo'/></nav>
<section className='checkout-content'>
<div className='back-container'>< img src={back} onClick={handleGoBack} className='back' alt='go back'/><p>Order Summary</p></div>
<h3 className='order-restaurant-name'>Breakfast Hub</h3>
<div className='orders-details-container'>
<div className='orders-details'>
  <p className='order-count'>{items.length} Orders from <b>breakfast hub</b></p>
  {items.map((item)=>(

     <div key={item.id} className='order-lists'>
     {/* <p className='order'>{item.type}</p> */}
     <div className='order-detail'>
      <div className='item-update'><img src={minus} alt='minus symbol' className='add-icon'/><p className='num'>{item.quantity}</p><img src={plus}  className='subtract-icon' alt='addition symbol'/></div>
      <div className='food-description'>
        <p className='order-food-title'>{item.type}</p>
        <p className='food-description-text'>Croissants and a cup of coffee served with sauteed vegetables..</p>                             
      </div>
     </div>
     {    console.log(price+= +item.price*item.quantity)
     
     }
     <div className='order-price'>$ {item.price}</div>
     
     </div>
  ))}


</div>

<div className='orders-summary' >
  <p className='orders-summary_title'>Summary</p>

  <hr className='order-hr'></hr>
  <div className='order-summary orders-summary_price'><p>Orders</p><p>$ {totalPrice}</p></div>
  <div className='order-summary orders-summary_delivery'><p>Delivery</p><p>$ 400</p></div>
  <div className='order-summary orders-summary_services'><p>Services</p><p>$ 50</p></div>
  <div className='order-summary orders-summary_total'><p>TOTAL</p><p>$ {totalPriceWithFees.toLocaleString()}</p></div>
  <ButtonPill text='CONFIRM ORDER' className='order-confirm-btn' onclick={showConfirmModal}/>
</div>
</div>

<section className='delivery-details-container'> 
<h3 className='delivery-details-title'>Delivery Details</h3>
<div className='map-container'>
  <Map/>
<div className='order-location'> 
<img src={orderlocation} alt='order address'/>
<input value={userAddress} onChange={showAddress} className='order-input'>
</input>  
</div>
<button className='order-duration-btn'>
15-25 mins
</button>
<div className='order-phone-number'> 
<img src={phone} alt='order phone'/>
<input type='text' placeholder='Phone Number'  className='order-input'>
</input>  
</div>
{/* payment section */}
<h3 className='payment-title'>Payment Method</h3>
<div className='order-payment' onClick={togglePayment}> 
<img src={payment} alt='payment card illustration'/>
<input type='text' placeholder='Add a payment method' className='order-input' readOnly/>
<img src={options} alt='payment card illustration' className='options-arrow' />
</div>
{showPayment && 
<div className='payment-options'>
  <div className='payment-option'><img src={cash} alt='cash-illustration' className='payment-options_img' /><p>Pay with cash</p></div>
  <div  className='payment-option'><img src={newcard} alt='new-illustration' className='payment-options_img' /><p>Add a new card</p></div>
</div>
}
</div>
</section>



</section>


      <Footer/>
    </div>
  )
}

export default Checkout