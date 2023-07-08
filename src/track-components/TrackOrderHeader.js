import React from 'react'
import back from '../images/back-arrow.png'
import chat from '../images/chat-icon.png'
import '../styles/trackOrder.css'
export default function TrackOrderHeader() {
  return (
    <div>
        <div className='track-order-heading'>
            <div>
            <img className='track-order-back' src={back}  alt='back-arrow'/>
            </div>
            <div><h2 className="forgot-password_title auth-title">Track your Order</h2></div>  
            <div>
            <img className='track-order-chat' src={chat} alt="chat icon" />
            </div>
       </div>


      <div className='delivery-time-div'>
      <h3 className='track-time-header'>Estimated Delivery Time</h3>
      <h4 className='track-time' >3:00PM</h4>
      </div>
        
    </div>
  )
}
