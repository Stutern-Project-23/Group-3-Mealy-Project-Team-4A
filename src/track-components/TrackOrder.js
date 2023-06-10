import React from 'react'
import TrackOrderHeader from "./TrackOrderHeader";
import YourRider from "./YourRider";
import OrderProgress from './OrderProgress';
import '../styles/trackOrder.css'
export default function TrackOrder() {
  return (
    <div  className='track-order-main-container'>
      <TrackOrderHeader/>
      <YourRider/>
      <OrderProgress/>
    </div>
  )
}
