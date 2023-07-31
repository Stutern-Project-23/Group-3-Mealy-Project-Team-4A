import React from "react";
import LogoDark from "../images/logo.svg";
import Location from "../images/location.svg";
import ArrowDown from "../images/arrowdown.svg";
import order from "../images/filterIcon.svg";

import { useDispatch, useSelector} from "react-redux";
import { Profile } from "../redux/slices/profileSlice";
import { displayedAuthModal, toggled } from "../redux/slices/authSlice";
import ProfileImg from "../images/unAuthProfileIcon.svg";
import AuthProfileImg from "../images/authprofileIcon.svg"

import LoginToolTip from "./LoginToolTip";
import { Order } from "../redux/slices/orderSlice";
import { NavLink } from "react-router-dom";
import * as auth from '../redux/constants/auth'

function HomepageNav() {

  let dispatch = useDispatch();
  const {authUser}=useSelector((state)=>state.auth)
  const {userAddress}=useSelector((state)=>state.userData)


  function displayProfile() {
  dispatch(Profile('showProfile'));

  }
 
  function toggleLoginTip(){
    dispatch(toggled('loginTip'))
  }
  function openOrder(){
    dispatch(Order('openOrder'))
}
function showMap(){
  dispatch(displayedAuthModal(auth.map))
}
   


  return (
    <nav className="homepage-nav" id="home-nav">
       <NavLink>
        <img
          src={LogoDark}
          alt="mealy dark logo"
          className="logo-dark nav-logo"
      
        />
        </NavLink>

      <div className="address-input">
        <div className="address-container">
          <img
            src={Location}
            alt="location icon"
            className="nav-section_location-icon"
          />
          <div className="address" onClick={showMap}>
            {userAddress ? <p>{userAddress} </p>: "Add Address"}
          </div>
          <img
            src={ArrowDown}
            alt="arrow icon"
            className="nav-section_arrow-icon"
          />
        </div>
        <input className="homepage-nav_search" placeholder="search"  autoComplete="current-password"></input>
      </div>
      <div className="cart-profile ">
        {authUser? (
          <>
            <img
              src={order}
              alt="order icon"
              className="nav-section_order-icon"
              onClick={openOrder}
            />

            <img
              src={AuthProfileImg}
              alt="profile icon"
              className="auth-profile-icon nav-section_profile-icon"
              onClick={displayProfile}
            />
          </>
        ) : (
          <div className="unAuthIcon-container">
          <img
            src={ProfileImg}
            alt="unathourized user profile icon"
            className="unauth-profile-icon nav-section_profile-icon"
            onClick={toggleLoginTip}
          />
          <LoginToolTip/>
          </div>
        )}
      </div>
    
    </nav>
  );
}

export default HomepageNav;
