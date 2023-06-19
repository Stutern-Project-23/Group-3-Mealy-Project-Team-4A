// import React from "react";
// import ForgotPasswordForm from "./ForgotPasswordForm";
// import logo from "../images/forgot-password-img.png";

// import "../styles/forgotpassword.css";
// export default function ForgotPassword() {
//   return (
//     <div className="forgot-password-container auth-padding auth-width">
//       <h2 className="forgot-password_title auth-title">Forgot Password</h2>

//       <img src={logo} alt="forgot-email" className="privacy-img" />

//       <p className="forgot-password_instruction">Please Enter Your Email Address To Receive A Verification Code</p>

//       <ForgotPasswordForm />
//     </div>
//   );
// }

import "../styles/forgotpassword.css";
import React, {useState} from 'react'
import axios from "axios"
import logo from "../images/forgot-password-img.png";
import ButtonLarge from "./Buttons";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("")

    const handleEmail=(e)=>{
        const mail = e.target.value;
        setEmail(mail)
        console.log(email)
    } 
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        const url = ""
        

        
        axios.post(url, email)
        .then(res=> {
            console.log(res.data)
        })
        .catch(err=>{
            console.log(err)
        })
        setErrorMessage("")
        setEmail('')
        
        

        console.log("your mail has been submitted");
        console.log(`email address: ${email}`);
    }
    

   
    

  return (
  <div>
    <div  className="forgot-password-container auth-padding auth-width">
      <h2 className="forgot-password_title auth-title">Forgot password</h2>
      <img src={logo} alt="forgot-email" className="privacy-img" />
      <p className="forgot-password_instruction">Please enter your email address to receive a verification code</p>
            
          <form className="forgot-password_form" onSubmit={handleSubmit}>
                <div className="forgot-password_input-container">
                  <input className="forgot-password_email-input" placeholder='email address' type='email' onChange={handleEmail} value={email} />
                    {errorMessage && <p className="invalid-feedback">{errorMessage}</p> }
                </div>
                <ButtonLarge type='submit' text="SEND"/>
          </form>

    </div>

    </div>
  )
}

export default ForgotPassword
