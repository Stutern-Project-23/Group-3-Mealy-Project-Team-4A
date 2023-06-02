import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import logo from '../images/forgot-password-img.png'
import CustomHeader from "./ForgotPasswordHeader";
import '../styles/forgotpassword.css'
export default function ForgotPassword() {
  return (
    <div className="forgot-password-main-container">
      <div className='header-container'>
      <div><CustomHeader heading="Forgot Password" /></div>
      </div>

      <div className="app-logo">
        <img className ="app-logo-img"src ={logo} alt="forgot-email"/>
      </div>

      <div className="enter-email-text">
        <CustomHeader subtitle="Please Enter Your Email Address To Receive A Verification Code" />
      </div>
      <div>
      <ForgotPasswordForm />
      </div>
    </div>
  );
}
