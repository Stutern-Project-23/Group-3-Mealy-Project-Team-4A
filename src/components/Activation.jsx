import React from 'react'
import Image from "../images/activation.svg"
import "../styles/activation.css";

const Activation = () => {
  return (
   <React.Fragment>
      <div className="activation-container">
        <img src={Image} alt="activation" className='activation-img' />
        <h1 className='activation-title'>Activation code</h1>
        <p className='activation-email-notify'>An email was sent to *****@gmail.com with an active code</p>
        <div className="activation-code-box-container">
          <div className="code-box"><p>*</p></div>
          <div className="code-box"><p>*</p></div>
          <div className="code-box"><p>*</p></div>
          <div className="code-box"><p>*</p></div>
        </div>
        <p className='receive-code'>Did not receive code? <span>Resend Code</span></p>
      <button className="verify-proceed-button">verify and proceed</button>
      </div>
    </React.Fragment>
  )
}

export default Activation
