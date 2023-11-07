import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2 id="logo-name">PuXian Temple</h2>
      <div className="nav-links">
        <a href="">About</a>
        <a href="">Events</a>
        <a href="">Contact Us</a>
        <a href="" id="donate-btn">
          Donate
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
