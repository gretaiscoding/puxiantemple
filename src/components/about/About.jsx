import React from 'react';
import './about.css';

const About = () => {
  return (
    <section>
      <div class="section__container about__container">
        <div class="about__image">
          <img src="/images/about.jpg" alt="puxian-temple" />
        </div>
        <div class="about__content">
          <h2 class="section__header">About Us</h2>
          <p class="section__subheader">
            Puxian Temple was founded in 1980,
            <br />
            known as the smallest temple in the world.
          </p>
          <button class="button-gold">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
