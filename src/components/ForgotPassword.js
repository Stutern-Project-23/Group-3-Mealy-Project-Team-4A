import React from "react";
import ForgotPasswordForm from "./ForgotPasswordForm";
import logo from "../images/forgot-password-img.png";
import ReactModal from "react-modal";
import "../styles/forgotpassword.css";
import { useDispatch, useSelector } from "react-redux";
import { closedAuthModal } from "../redux/slices/authSlice";
import * as auth from "../redux/constants/auth"
import close from "../images/close.svg"
export default function ForgotPassword() {
const {displayForgotPwd}=useSelector((state)=>state.auth)
 const dispatch=useDispatch();
function closeForgotPwdModal(){
dispatch(closedAuthModal(auth.forgotPwd))
}
  return (
    <ReactModal
      isOpen={displayForgotPwd}
      contentLabel="forgotpasswordmodal"
      overlayClassName="overlay"
      className="forgot-password-container auth-width auth-padding"
      onRequestClose={closeForgotPwdModal}
    >
      <img src={close} className="close-icon" alt="close icon" onClick={closeForgotPwdModal}/>
      <h2 className="forgot-password_title auth-title">Forgot Password</h2>

      <img src={logo} alt="forgot-email" className="privacy-img" />

      <p className="forgot-password_instruction">
        Please Enter Your Email Address To Receive A Verification Code
      </p>

      <ForgotPasswordForm />
    </ReactModal>
  );
}
