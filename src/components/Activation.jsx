import React from "react";
import Image from "../images/activation.svg";
import ButtonLarge from "./Buttons";

const Activation = () => {
  return (
    <React.Fragment>
      <div className="activation-container auth-padding auth-width">
        <img src={Image} alt="activation" className="activation-img" />
        <h2 className="activation-title auth-title">Activation Code</h2>
        <p className="activation-email-notify">
          An email was sent to *****@gmail.com with an active code
        </p>
        <div className="activation-code-box-container">
          <div className="code-box">
            <p>*</p>
          </div>
          <div className="code-box">
            <p>*</p>
          </div>
          <div className="code-box">
            <p>*</p>
          </div>
          <div className="code-box">
            <p>*</p>
          </div>
        </div>
        <p className="receive-code">
          Did not receive code? <span>Resend Code</span>
        </p>
        <ButtonLarge text="VERIFY AND PROCEED" />
      </div>
    </React.Fragment>
  );
};

export default Activation;
