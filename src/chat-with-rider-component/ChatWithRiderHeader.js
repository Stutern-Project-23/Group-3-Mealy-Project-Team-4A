import React from 'react'
import back from '../images/back-arrow.png'
import call from '../images/call-icon.png'
import rider from '../images/rider.png'
export default function ChatWithRiderHeader() {
  return (
    <div className='chat-with-rider-header-container'>
      <div >
      <img  className='chat-with-rider-back' src={back}  alt='back-arrow'/>
      </div>

      <div className='rider-header-image-and-name'>
            <div className='chat-with-rider-image'>
                <img src={rider} alt='rider'/>
            </div>

            <div className='rider-details'>
                <h4 className='your-rider-title'>Micheal Stone</h4>
            </div>
      </div>

      <div className='chat-with-rider-call-div'>
      <img className='chat-with-rider-call' src={call}  alt='call-icon'/> 
      </div>

    </div>
  )
}
