import React from 'react'
import star from '../images/star-icon.png'
import rider from '../images/rider.png'
export default function YourRider() {
  return (
    <div className='your-rider-container'>
      <div className='your-rider-left-side'>
        <div>
          <img src={rider} alt='rider'/>
        </div>

        <div className='rider-details'>
          <h4 className='your-rider-title'>Your Rider</h4>
          <h6 className='rider-name'>Micheal Stone</h6>
        </div>
      </div>

      <div className='your-rider-right-side'>
        <div className='rider-rating'>
          <div><img src={star} alt='star-review' className='rating-star'/></div>
          <div><img src={star} alt='star-review'  className='rating-star'/></div>
          <div ><img src={star} alt='star-review'  className='rating-star'/></div>
          <div><img src={star} alt='star-review'  className='rating-star'/></div>
          <div><img src={star} alt='star-review'  className='rating-star'/></div>
          <div className='rider-name rating-number'>5.0</div>
        </div>
        <div className='rider-name'><p>(120 ratings)</p></div>
      </div>
        
    </div>
  )
}
