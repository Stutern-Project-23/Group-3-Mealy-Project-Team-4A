import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import logo from "../images/forgot-password-img.png";

import "../styles/forgotpassword.css";
export default function ForgotPassword() {
  return (
    <div className="forgot-password-container auth-padding auth-width">
      <h2 className="forgot-password_title auth-title">Forgot Password</h2>

      <img src={logo} alt="forgot-email" className="privacy-img" />

      <p className="forgot-password_instruction">Please Enter Your Email Address To Receive A Verification Code</p>

      <ForgotPasswordForm />
    </div>
  );
}