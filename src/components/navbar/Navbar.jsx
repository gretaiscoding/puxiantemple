import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <nav>
      <h2>PuXian Temple</h2>
      <div className="nav-links">
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Learn Buddhism</a>
      </div>
    </nav>
  );
};

export default Navbar;
