import React from "react";
import "../styles/profile.css";
import ReactDOM from "react-dom";
import Card from "../images/card.svg";
import Logout from "../images/logout.svg";
import { AiOutlineRight } from "react-icons/ai";
import {useDispatch } from "react-redux";
import { displayedProfileEdit, Loggedout, Profile } from "../redux/slices/profileSlice";
import * as profileConst from "../redux/constants/profile" 


function ProfileComp() {
//  const { displayProfile } = useSelector((state) => state.profile);
 const dispatch=useDispatch();
 function showNameEdit(){
  dispatch(displayedProfileEdit(profileConst.nameEdit))
 }
 function showPasswordEdit(){
  dispatch(displayedProfileEdit(profileConst.passwordEdit))
 }
 function closeProfile() {
  dispatch(Profile('closeProfile'));

}


function openLogout(){
  dispatch(Loggedout('openLogout'))
  console.log("openlg")
}
  return ReactDOM.createPortal(

    <section className="profile-section" >
      <div className="overlay_dark" onClick={closeProfile}></div>
      <div className="profile">
      <h2>Hello, Mariam!</h2>
      <hr className="d"></hr>
      <div className="profile-content">
        <div className="profile-title-container">
          <div className="profile-title-container_section">
            <p className="profile-title">Name</p>
            <p className="profile-title_text profile-title_name">Mariam</p>
            <p className="profile-title">Email</p>
            <p className="profile-title_text">Marmtee@gmail.com</p>
          </div>
          <p className="edit-text" onClick={showNameEdit}>
            Edit
          </p>
        </div>
        <hr className="name-email-hr"></hr>
        <div className="profile-title-container">
          <div className="profile-title-container_section">
            <p className="profile-title">Password</p>
            <p className="profile-title_password">........</p>
          </div>
          <p className="edit-text" onClick={showPasswordEdit}>
            Edit
          </p>
        </div>
        <hr></hr>

        <p className="profile-title">Payment method</p>
        <div className="profile-title-container profile-title_text">
          <div className="profile-title_payment-text">
            <img src={Card} alt="debit card icon" className="card-icon" />{" "}
            <p>Add a new card</p>
          </div>

          <AiOutlineRight />
        </div>
        <hr></hr>

        <div className="profile-title-container profile-title_text">
          <div className="profile-title_payment-text">
            <img src={Card} alt="debit card icon" className="card-icon" />{" "}
            <p>Wallet</p>
          </div>

          <AiOutlineRight />
        </div>
        <hr></hr>

        <div className="profile-title-container profile-title_text" onClick={openLogout}>
          <div className="profile-logout">
            <img src={Logout} alt="logout icon" className="logout-icon" />
            <p >Logout</p>
          </div>

          <AiOutlineRight />
        </div>
      </div>
      </div>
    </section>,
    document.getElementById("portal")
  );
}

export default ProfileComp;
