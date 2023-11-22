import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer__name-and-address">
        <h1>Puxian Temple</h1>
        <p>Jalan Bukit Dumbar, Jelutong, 11600 George Town, Pulau Pinang</p>
      </div>
      <div className="footer__phone-number__container">
        <div className="footer__phone-number">
          <h3>Contact Us</h3>
          <p>Whatsapp: +6010 865 8179</p>
          <p>Bro. Tan: +6019 458 5749</p>
          <p>Email: puxiantemple@yahoo.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
