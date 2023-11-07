import React from 'react';
import './hero.css';

const Hero = () => {
  return (
    <div class="hero__container">
      <h1>Welcome to Puxian Temple</h1>
      <div class="hero__button-container">
        <button class="hero__button">
          <a href="#">Learn More</a>
        </button>
      </div>
    </div>
  );
};

export default Hero;
