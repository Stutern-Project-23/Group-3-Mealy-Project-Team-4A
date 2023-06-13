import React from "react";
import mealy from "../images/MEALY.jpg";
import cart from "../images/bluecart.svg";
import "../styles/LandingPage.css";
import Elipse from "../images/Group 203Elipse.png";
import AboutFood from "../images/aboutfood.svg";
import Breakfast from "../images/BreakfastHub.jpg";
import Gory from "../images/Gory Cafe.jpg";
import Platter from "../images/Platters.png";
import br_sm from "../images/br-small.jpg";
import gory_sm from "../images/gory-small.png";
import pl_sm from "../images/platter-small.png";
import star from "../images/star.jpg";
import rating from "../images/rating.jpg";
import rating2 from "../images/rating2.png";
import rating3 from "../images/rating3.jpg";
import bike from "../images/Group 206bike.jpg";
import clock from "../images/Group 207clock.jpg";
import cutlery from "../images/Group 205cutlery.jpg";
import HomepageNav from "./HomepageNav";
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";

const LandingPage = () => {
  return (
    <section className="landing-page">
      <nav className="landing-page-nav ">
        <img src={mealy} alt="Logo" className="landing-page-nav_logo" />

        <div className="landing-nav-links">
          <NavLink to="home">Home</NavLink>
          <a href="#">About Us </a>
          <a href="#">Contact Us</a>
          <img src={cart} className="cart" alt="Cart" />
        </div>
      </nav>
      <section className="hero-section landing-page-padding">
        <div className="hero-text-container">
          <h1 className="hero-heading">
            Delightful Eats Delivered with
            <span>Ease!</span>
          </h1>

          <p>
            Enjoy a hassle free dining experience as we bring the best
            restaurants and dishes right to your doorstep.
          </p>
          <button className="get-started-btn">Get Started</button>
        </div>

        <div className="hero-img-container">
          <img
            src={Elipse}
            className="hero-img"
            alt="Pictures of different dishes"
          />
        </div>
      </section>

      <div className="about-section landing-page-padding">
        <div className="about-img-container">
          <img src={AboutFood} alt="" className="about-food-img" />
        </div>
        <div className="about-text-container">
          <h2 className="about-heading">
            About <span>Us</span>
          </h2>
          <p>
            Our food delivery app brings your favorite dishes to your doorstep.
            From local to popular restaurants, we connect you with a wide
            selection of delicious meals.
          </p>
        </div>
      </div>

      <div className="popular-section landing-page-padding">
        <h2 className="popular-section-title">
          Most Popular <span>Restaurant</span>
        </h2>

        <div className="popular-section_food">
          <RestaurantCard name="Breakfast hub" />
          <RestaurantCard name="Gory's Cafe" />
          <RestaurantCard name="Platters Couch" />
        </div>
      </div>

      <div className="choose-section">
        <h2 className="choose-section-title">
          Why <span className="highlight"> Choose</span> Us ?
        </h2>

        <section className="choose-section-content landing-page-padding ">
          <div className="grid-box">
            <img src={bike} alt="bike illustration" className="choose-img" />
            <h2>Fast Delivery </h2>
            <p>Enjoy fast and reliable delivery to every location </p>
          </div>
          <div className="grid-box">
            <img src={clock} alt="clock illustration" className="choose-img" />
            <h2>24/7 Delivery Services</h2>
            <p>
              Craving a delicious meal at any hour? Mealy has got you covered!
            </p>
          </div>
          <div className="grid-box">
            <img
              src={cutlery}
              alt="cutlery illutration"
              className="choose-img"
            />
            <h2>Quality Food</h2>
            <p>Good food,good mood we take this as a top priority</p>
          </div>
        </section>
      </div>

      <Footer />
    </section>
  );
};

export default LandingPage;