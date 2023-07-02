import "../styles/forgotpassword.css";
import React, {useState } from "react";
import { useForm } from "react-hook-form";
import padlock from "../images/padlock.svg"
import ButtonLarge from "./Buttons";
import * as auth from "../redux/constants/auth";
import { useDispatch } from "react-redux";
import { closedAuthModal, displayedAuthModal } from "../redux/slices/authSlice";
import axios from "axios"
export default function ForgotPasswordForm() {
  const [existError,setExistError]=useState(false)
  const [forgotError,setForgotError]=useState("")
  const [resetText,setResetText]=useState("");
  const dispatch = useDispatch();


  const { register, handleSubmit,formState:{errors} } = useForm();
 

  const onSubmit = async (data) =>{
    console.log(data)
    try{
      const response=await axios.post("https://mealyapp-bdev.onrender.com/api/v1/user/forgotPassword",data)
      console.log(response.data)
      setExistError(false)
      setResetText(response.data)
      // dispatch(closedAuthModal(auth.forgotPwd));
      // dispatch(displayedAuthModal(auth.CreateNewPwd));
      
    }
    catch(err){
      console.error(err.response.data)
      setForgotError(err.response.data)
      setExistError(true)
      
    }
  };
  
  return (
    <form className="forgot-password_form" onSubmit={handleSubmit(onSubmit)}>
      <div className="forgot-password_input-container auth-input-container">
        <img src={padlock} className="icon-left padlock"/>
        <input
          name="email"
          type="text"
          {...register("email", { required: "Enter your email address",pattern:{
            value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message:'Enter email in the correct format'
          } })}
          className={`forgot-password_email-input ${
            errors.email ? "is-invalid" : ""
          }`}
          placeholder="email address"
        />
     
      </div>
      <p className="error-message">{errors.email?.message}</p>
       <p style={{color:"red"}} className={existError?"auth-error":"auth-error-display"}>{forgotError}</p>
       <p className="reset-text">{resetText}</p>
      <ButtonLarge text="SEND"  />
    </form>
  );
}
