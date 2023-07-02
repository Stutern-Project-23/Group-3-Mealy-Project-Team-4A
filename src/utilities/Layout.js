// import React, { useEffect, useState } from "react";
import HomepageNav from "../components/HomepageNav";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import "../styles/layout.css"
import EditNameEmailModal from "../components/EditNameEmail";
import EditPasswordModal from "../components/EditPassword";
// import Categories from "./Categories";

import SignUp from "../components/SignUp";
import Activation from "../components/Activation";
import Login from "../components/Login";
import DeliveryAddress from "../components/DeliveryAddress";
import ForgotPassword from "../components/ForgotPassword";
import NewPassword from "../components/NewPassword";
// import CartModal from "../components/CartModal"
import Logout from "../components/Logout";
import ProfileComp from "../components/ProfileComp";
import { useSelector } from "react-redux";
import YourOrders from "../components/YourOrders";
import CartModal from "../components/CartModal";

function Layout() {
  const { displayProfile } = useSelector((state) => state.profile);

  return (
    <div className="app-layout">

      {/* PORTAL AND MODALS */}
      <SignUp />
      <Activation />
      <Login />
      <DeliveryAddress />
      <ForgotPassword />
      <NewPassword />
      {displayProfile && <ProfileComp />}
      <EditNameEmailModal />
      <EditPasswordModal />
      <Logout/>
         
     {/* track order */}
      <YourOrders/>
      <CartModal />
     

      {/* MAIN CONTENT */}
      <HomepageNav />
      <>
        <Outlet />
      </>
      <Footer />
    </div>
  );
}

export default Layout;
