import React, { useEffect, useState } from "react";
import "../styles/mapAddress.css";
import RoundLocation from "../images/locationround.svg";
import ReactModal from "react-modal";
import { useDispatch} from "react-redux";
import {
  authedHomepage,
  closedAuthModal,
  toggled,
} from "../redux/slices/authSlice";
import { useLocation, useNavigate } from "react-router-dom";
import Map from "./Map"

const DeliveryAddress = () => {
  const [setAddress, setSetAddress] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  function closeMapModal() {
    dispatch(closedAuthModal("map"));
    setSetAddress(false);
    dispatch(authedHomepage("auth"));
    dispatch(toggled("loginTip"));
    console.log(setAddress);
    console.log(location.pathname);
  }

  useEffect(() => {
    if (setAddress && location.pathname === "/") {
      navigate("/home/deliveryOrder");
    }
  }, [setAddress, navigate, location.pathname]);

  return (
    <ReactModal
      // isOpen={displayDeliveryMap}
      isOpen={true}
      overlayClassName="overlay"
      className="delivery-address auth-width"
      onRequestClose={closeMapModal}
    >
      <div className="address-section">
        <h2>Add a delivery address</h2>

        <div className="input-container">
          <input
            type="text"
            className="delivery-address_search-input"
            placeholder="Search street, city, district....."
            autoComplete="current-password"
          />

          <div className="current-location">
            <img src={RoundLocation} alt="a round location icon" />{" "}
            <p onClick={closeMapModal}> Use current location</p>
          </div>
        </div>
        <p className="set-location">Or set your location on the map</p>
      </div>

      <div className="map-section">
        <Map />
      </div>
    </ReactModal>
  );
};

export default DeliveryAddress;






