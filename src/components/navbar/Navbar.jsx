import React, { useState, useEffect } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  useEffect(() => {
    if (isNavExpanded) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isNavExpanded]);

  return (
    <nav>
      <h2 className="nav__logo">Pu Xian Temple</h2>
      <button
        className="nav__hamburger"
        onClick={() => setIsNavExpanded(!isNavExpanded)}
      >
        Menu
      </button>
      <div className={`nav__links ${isNavExpanded ? 'expanded' : ''}`}>
        <button className="nav__close" onClick={() => setIsNavExpanded(false)}>
          Close
        </button>
        <a href="#">About</a>
        <a href="#">Events</a>
        <a href="#">Contact Us</a>
        <a href="#" id="donate-btn">
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
