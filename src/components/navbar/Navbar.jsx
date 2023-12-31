import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (isNavExpanded) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isNavExpanded]);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <nav>
      <h2 className="nav__logo">Pu Xian Temple</h2>
      <button className="nav__hamburger" onClick={toggleNav}>
        <span className="hamburger-icon">☰</span>
      </button>
      <div className={`nav__links ${isNavExpanded ? 'expanded' : ''}`}>
        <button className="nav__close" onClick={toggleNav}>
          <span className="close-icon">×</span>
        </button>
        <a href="#" className="nav__link">
          About
        </a>
        <a href="#" className="nav__link">
          Events
        </a>
        <a href="#" className="nav__link">
          Contact Us
        </a>
        <a href="#" className="nav__link" id="donate-btn">
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
