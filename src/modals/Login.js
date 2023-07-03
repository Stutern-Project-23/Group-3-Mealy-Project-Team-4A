import React, { useEffect, useState } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import eye from "../images/eye.svg"
import cuate from "../images/cuate.svg";
import mail from "../images/mail.svg";
import password from "../images/password.svg";
// import eye from '../images/eye.svg';
import google_logo from "../images/logos_google-icon.svg";
import "../styles/login.css";
import close from "../images/close.svg";
import ButtonLarge from "../components/Buttons";
import ReactModal from "react-modal";
import { useDispatch, useSelector } from "react-redux";
import {  Authenticated, closedAuthModal, displayedAuthModal, toggled} from "../redux/slices/authSlice";
import * as auth from "../redux/constants/auth"
import axios from "axios"
import { Email,Name, idGenerated } from "../redux/slices/userData";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors,isSubmitting },
  } = useForm();
  const [loginError,setLoginError]=useState("");
  const [exist,setExist]=useState("");
  const dispatch = useDispatch();
  const { showLoginModal } = useSelector((state) => state.auth);
  const location= useLocation()
  const navigate=useNavigate()
  const onLoginSubmit = async (data) => {
    
    console.log(data); 
    try{
      const response=await axios.post("https://mealyapp-bdev.onrender.com/api/v1/user/login",data)
      console.log(response.data.data.user._id)
      console.log(response)
      dispatch(idGenerated(response.data.data.user._id))
      localStorage.setItem('userName',response.data.data.user.userName)
      localStorage.setItem('email',response.data.data.user.email)
      localStorage.setItem("isAuth", String(true));
      dispatch(Authenticated(JSON.parse(localStorage.getItem("isAuth"))))
      dispatch(Name(localStorage.getItem("userName"))) 
      dispatch(Email(localStorage.getItem("email"))) 
      
      dispatch(closedAuthModal(auth.login))
    
     
      if (location.pathname==="/"){
        navigate("/home/deliveryOrder")
        dispatch(displayedAuthModal(auth.map))
 
      }
      

      console.log(response)
    }
    catch(err){
      console.error(err.response.data)
      setLoginError(err.response.data.message)
    }
  };
  useEffect(()=>{
    if(loginError){
      setExist(loginError)
    }
  }
,[loginError])


  // function displayMap(){
  //   dispatch(closedAuthModal(auth.login))
  //   dispatch(displayedAuthModal(auth.map))
  //   dispatch(authedHomepage())
    
  // }
  function displaySignupModal(){
    dispatch(closedAuthModal(auth.login))
    dispatch(toggled('signup'))
  }
  function displayForgotPwdModal(){
    dispatch(displayedAuthModal(auth.forgotPwd))
    dispatch(closedAuthModal(auth.login))
  }
  function closeLogin() {
  
    dispatch(closedAuthModal(auth.login));

  }
  return (
    <ReactModal
     isOpen={showLoginModal}
     //isOpen={true}
      
      contentLabel="loginmodal"
      overlayClassName="overlay"
      className="login-container auth-width auth-padding"
      onRequestClose={closeLogin}
    >
      <img src={close} alt="close modal icon" className="login-close-icon" onClick={closeLogin} />
      <h3 className="login-title">Login to Mealy</h3>
      <div className="login-instruction">
        Don't have an account? <p onClick={displaySignupModal}>Sign up</p>
      </div>
      <img src={cuate} alt="mealy" className="cuate-img" />
      <form onSubmit={handleSubmit(onLoginSubmit)} className="login-form">
        <div className="login-input-container auth-input-container">
          <img src={mail} alt="mail" className="mail icon-left" />
          <input
            type="text"
            placeholder="Email"
            {...register("email", { required: true })}
            className="login-input"
          />
        </div>
        {errors.email && (
            <span className="error-message">Email is required</span>
          )}

        <div className="login-input-container  auth-input-container ">
          <img src={password} alt="password" className="icon-left"/>
          <img src={eye} alt='eye' className="icon-right"/>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: true })}
            className="login-input"
          />    
        </div>
        {errors.password && (
            <span className="error-message">Password is required</span>
          )}

        <p className="forgot-password" onClick={displayForgotPwdModal}>
          
          Forgot password?
        </p>
        <p className={exist?"auth-error":"auth-error-display"}>{exist}</p>
        <ButtonLarge text="LOGIN" type='submit' classname="login-btn" isSubmit={isSubmitting} loading={<div className="loader"></div>}/>
      </form>

      <button className="google-btn">
        <img className="google_icon" src={google_logo} alt="google" />
        <p>Continue with Gmail</p>
      </button>
    </ReactModal>
  );
};

export default Login;
