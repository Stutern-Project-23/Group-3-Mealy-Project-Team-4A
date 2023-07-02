import React from "react";
import "../styles/restaurantCard.css";
import { BsThreeDotsVertical } from "react-icons/bs";


import { Link } from "react-router-dom";
function RestaurantCard({ name, rating, price, Monogram, Food,StarImg }) {
  return (
    <Link to="/menu" className="restaurant-card">
      <div className=" restaurant-card_top-section">
        <div className="restaurant-name-container">
          <img src={Monogram} alt="a small restaurant" className="restaurant-logo"/>
          <p className="restaurant-name">{name}</p>
        </div>
        <BsThreeDotsVertical />
      </div>
      <img src={Food} className="restaurant-img" alt="restaurant meal" />
      <div className="restaurant-card_bottom-section">
        <div className="rating">
        <img src={StarImg} alt="restaurant star rating" className="star" />
        <p>{rating} (Excellent)</p>
        </div>
        <p className="delivery-price"> {price}</p>
      </div>
    </Link>
  );
}

export default RestaurantCard;
