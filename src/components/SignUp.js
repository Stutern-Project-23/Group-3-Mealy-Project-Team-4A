import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Biker from "../images/bike.png";
import Name from "../images/name.png";
import Password from "../images/password.png";
import Email from "../images/email.png";
import "../styles/SignUp.css";
import ButtonLarge from "./Buttons";
import ReactModal from "react-modal";
import close from "../images/close.svg";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import {

  displayedAuthModal,
  toggled,
} from "../redux/slices/authSlice";


function SignUp() {
  const [userExist,setUserExist]=useState('')
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

const onSignupSubmit = async (data) => {
  const formData={
    ...data,
    userAddress: '123 Street, City, Country'
  }
  console.log(formData)
 try{

  const response=await axios.post("https://mealyapp-bdev.onrender.com/api/v1/user/Signup",formData)
  console.log(response)
  dispatch(displayedAuthModal("activation"));
  dispatch(toggled('signup'))
  setUserExist('')
 }
  catch(err){
    console.error(err.response.data.message)
    setUserExist(err.response.data.message)
   

  }
  };
  const dispatch = useDispatch();
  function closeSignUp() {
    dispatch(toggled('signup'));
  }
  function openActivationModal() {
    ;
  }
  function openLoginModal() {
    dispatch(toggled('signup'));
    dispatch(displayedAuthModal("login"));
  }
 

  const { displaySignUpModal } = useSelector((state) => state.auth);


  return (
    <ReactModal
      isOpen={displaySignUpModal}
      contentLabel='signupmodal'
      overlayClassName='overlay'
      onRequestClose={closeSignUp}
      className='signup-container auth-padding auth-width'
    >
      <img
        src={close}
        alt='close icon'
        className='close-signup-icon'
        onClick={closeSignUp}
      />

      <h3>Sign Up to Mealy</h3>
      <div className='signup-instruction'>
        Already have an Account?
        <p onClick={openLoginModal}>Login</p>
      </div>
      <img src={Biker} alt='a biker' className='biker-img' />

      <form
        onSubmit={handleSubmit(onSignupSubmit)}
        className='text-2xl w-40rem signup-form'
        noValidate
      >
        <div className='signup-input-container auth-input-container'>
         
            <img src={Name} alt='name icon' className="icon-left"/>
            <input
              id='userName'
              {...register("userName", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name should be at least 2 characters long",
                },
              })}
              placeholder='Name'
              className='signup-input'
            />
          </div>

          {errors.userName && (
            <p className='error-message'>{errors.userName.message}</p>
          )}
        

        <div className="signup-input-container auth-input-container">
        
          <img src={Email} alt="email icon" className="icon-email icon-left" />
          <input
            {...register("email", { required: "Email Address is required",pattern:{
              value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message:'Enter email in the correct format'
            } })}
            aria-invalid={errors.email ? "true" : "false"}
            placeholder="Email"
            className="signup-input"
          />
        
        </div>
        {errors.email && <p className="error-message">{errors.email?.message}</p>}
        <div className="signup-input-container auth-input-container">
      
          <img src={Password} alt="password icon" className=" icon-left" />
          <input
            {...register("password", {
              required: 'password is required',
              minLength:{
                value:8,
                message: "password should be at least 8 characters long",
             },
             pattern:{
               value: "^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$",
               message: 'Password must contain at least one alphanumeric character, one capital letter, and one number',
    
             }

            })}
            placeholder="Password"
            className="signup-input"
            type="password"
          />
          </div>

        {errors.password && (
            <p className='error-message'>{errors.password.message}</p>
          )}
<p className={userExist?"auth-error":"auth-error-display"}>{userExist}</p>
        <ButtonLarge text='SIGNUP' type='submit' />
      </form>
    </ReactModal>
  );
}

export default SignUp;
