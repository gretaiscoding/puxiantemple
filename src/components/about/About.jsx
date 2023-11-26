import React from 'react';
import './about.css';
import { getImageUrl } from '../../utils/tool';

const About = () => {
  return (
    <section>
      <div className="about__container">
        <div className="about__image">
          <img src={getImageUrl('founding-4.jpeg')} alt="puxian-temple" />
        </div>
        <div className="about__content">
          <div className="about__content__text">
            <h2 className="about__header">About Us</h2>
            <p className="section__subheader">
              In 1975, Bro. Tan Kooi Beng, founder of Pu Xian Temple,
              established the youngest non-sectarian Buddhist organization in
              Malaysia.
              <br />
              <br />
              Starting at 15, he initiated Buddhist teachings and tirelessly
              collected funds for activities for the world's 'smallest Buddhist
              temple'. The group, initially small, regularly conducted prayers
              and paid homage to a three-inch Buddha statue.
              <br />
              <br />
              Recognized and supported, the temple, now well-established, houses
              a 15-foot bronze Buddha statue, the largest in Penang.
            </p>
          </div>

          <button className="button-gold">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default About;
