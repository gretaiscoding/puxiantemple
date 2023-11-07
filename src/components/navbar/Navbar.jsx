import React from 'react';
import './navbar.css';
<<<<<<< HEAD
const Navbar = () => {
  return (
    <div>
      <h2>PuXian Temple</h2>
      <div className="links">
        <a href="">About Us</a>
        <a href="">Contact Us</a>
        <a href="">Learn Buddhism</a>
      </div>
    </div>
=======

const Navbar = () => {
  return (
    <nav>
      <h2 id='logo-name'>PuXian Temple</h2>
      <div className="nav-links">
        <a href="">About</a>
        <a href="">Events</a>
        <a href="">Contact Us</a>
        <a href="" id='donate-btn'>Donate</a>
      </div>
    </nav>
>>>>>>> 48be2e099304d044929da6c9581d15f4d10b23df
  );
};

export default Navbar;
