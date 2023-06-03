import React from 'react'
import Image from "../images/activation.svg"

const Activation = () => {
  return (
   <React.Fragment>
      <div className="activation-container">
        <img src={Image} alt="activation" />
        <h1>activation code</h1>
        <p className='sent-email'>An email was sent to *****@gmail.com with <br></br> an active code</p>
        <div className="code-box-container">
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