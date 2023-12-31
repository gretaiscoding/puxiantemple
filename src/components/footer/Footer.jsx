import React from 'react';
import './Footer.css'; // Ensure the CSS file is imported

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__name-and-address">
        <h1>Puxian Temple</h1>
        <p>Jalan Bukit Dumbar, Jelutong, 11600 George Town, Pulau Pinang</p>
      </div>
      <div className="footer__contact">
        <h3>Contact Us</h3>
        <p className="interactive">Whatsapp: +6010 865 8179</p>
        <p className="interactive">Bro. Tan: +6019 458 5749</p>
        <p className="interactive">Email: puxiantemple@yahoo.com</p>
      </div>
    </footer>
  );
};

export default Footer;
