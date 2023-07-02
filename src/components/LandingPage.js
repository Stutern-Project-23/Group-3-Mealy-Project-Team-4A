import React, { useEffect } from "react";
import mealy from "../images/logodark.svg";
import cart from "../images/bluecart.svg";
import "../styles/LandingPage.css";
import Elipse from "../images/Group 203Elipse.png";
import AboutFood from "../images/aboutfood.svg";
import Restuarant5 from "../images/rest5.png";
import Monogram1 from "../images/monogram1.png";
import bike from "../images/Group 206bike.jpg";
import clock from "../images/Group 207clock.jpg";
import cutlery from "../images/Group 205cutlery.jpg";
import star from "../images/star.svg"
import Footer from "./Footer";
import { NavLink } from "react-router-dom";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggled,authedHomepage } from "../redux/slices/authSlice";




import "../styles/activation.css"
import SignUp from "./SignUp";
import Activation from "./Activation";
import DeliveryAddress from "./DeliveryAddress";
import ForgotPassword from "./ForgotPassword";
import NewPassword from "./NewPassword";
import Login from "./Login";

const LandingPage = () => {
  const [activeLink, setActiveLink] = useState('');
 
  const dispatch=useDispatch()
  function displaySignup(){
   dispatch(toggled('signup'))
   console.log('signup clicked')

  }
  function goUnAuthHomepage(){
    dispatch(authedHomepage('unAuth'))
  }
 
  useEffect(() => {
   
      const handleHashChange = () => {
      const hash = window.location.hash;
      setActiveLink(hash);
    };

    handleHashChange(); // Set initial active link on component mount

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <section className="landing-page">
     <SignUp />
      <Activation />
      <Login />
      <DeliveryAddress />
      <ForgotPassword />
      <NewPassword />
      <nav className="landing-page-nav" >
        <img src={mealy} alt="Logo" className="landing-page-nav_logo" />

        <div className="landing-nav-links">
        <a href="/" className={activeLink === '' ? 'active' : ''}>
        Home
      </a>
      <a href="#about" className={activeLink === '#about' ? 'active' : ''}>
        About Us
      </a>
      <a href="#contact" className={activeLink === '#contact' ? 'active' : ''}>
        Contact Us
      </a>
     <NavLink to="/home/deliveryOrder"><img src={cart} className="cart" alt="Cart" onClick={goUnAuthHomepage} /></NavLink> 
        </div>
      </nav>
      <section className="hero-section " >
        <div className="hero-text-container">
          <h1 className="hero-heading">
            Delightful Eats Delivered with
            <span>Ease!</span>
          </h1>

          <p>
            Enjoy a hassle free dining experience as we bring the best
            restaurants and dishes right to your doorstep.
          </p>
          <button className="get-started-btn" onClick={displaySignup}>Get Started</button>
        </div>

        <div className="hero-img-container">
          <img
            src={Elipse}
            className="hero-img"
            alt="Pictures of different dishes"
          />
        </div>
      </section>

      <div className="about-section landing-page-padding" id="about">
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
          <RestaurantCard
            name="Breakfast Hub"
            rating="4.6"
            Monogram={Monogram1}
            Food={Restuarant5}
            StarImg={star}
          />{" "}
          <RestaurantCard
            name="Gory's Cafe"
            rating="4.6"
            Monogram={Monogram1}
            Food={Restuarant5}
            StarImg={star}
          />{" "}
          <RestaurantCard
            name="Breakfast Hub"
            rating="4.6"
            Monogram={Monogram1}
            Food={Restuarant5}
            StarImg={star}
          />
        </div>
      </div>lo

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
