import React from "react";
import "../styles/footer.css";
import LogoWhite from "../images/logowhite.svg";

function Footer() {
  return (
    <footer className="footer-padding">
      <img src={LogoWhite} alt="white logo" className="logo-white" />
      <div className="footer-links">
        <p className="footer-title">Links of interest</p>
        <p className="footer-link">About us</p>
        <p className="footer-link">FAQ</p>
        <p className="footer-link">Blog</p>
        <p className="footer-link">Contact us</p>
        <p className="footer-link">Security</p>
      </div>
      <div className="footer-links">
        <p className="footer-title">Legal</p>
        <p className="footer-link">Privacy Policy</p>
        <p className="footer-link">Terms of use</p>
      </div>
      <div className="footer-links">
        <p className="footer-title">Services</p>
        <p className="footer-link">24/7 delivery services</p>
      </div>
    </footer>
  );
}

export default Footer;
