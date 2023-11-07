import React from 'react';
import './discover.css';

const Discover = () => {
  return (
    <section class="section__container">
      <header className="discover__header">
        <h1>Our Upcoming Events</h1>
        <button class="button-gold">View All</button>
      </header>

      {/* To abstract */}
      <div class="discover__card-container">
        <div class="discover__card">
          <div class="discover__image">
            <img src="/images/about.jpg" alt="november" />
          </div>
          <div class="discover__card__content">
            <span class="label">FREE ENTRY</span>
            <h4>Puxian Pusa</h4>
            <span class="test">
              <img src="/images/calendar.png" alt="icon" class="icon" />
              <p>November 11, 2023 (Sunday)</p>
            </span>
            <span class="test">
              <img src="/images/location.png" alt="icon" class="icon" />
              <p>
                Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town,
                Pulau Pinang
              </p>
            </span>
          </div>
        </div>
        <div class="discover__card">
          <div class="discover__image">
            <img src="/images/about.jpg" alt="november" />
          </div>
          <div class="discover__card__content">
            <span class="label">FREE ENTRY</span>
            <h4>Puxian Pusa</h4>
            <span class="test">
              <img src="/images/calendar.png" alt="icon" class="icon" />
              <p>November 11, 2023 (Sunday)</p>
            </span>
            <span class="test">
              <img src="/images/location.png" alt="icon" class="icon" />
              <p>
                Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town,
                Pulau Pinang
              </p>
            </span>
          </div>
        </div>
        <div class="discover__card">
          <div class="discover__image">
            <img src="/images/about.jpg" alt="november" />
          </div>
          <div class="discover__card__content">
            <span class="label">FREE ENTRY</span>
            <h4>Puxian Pusa</h4>
            <span class="test">
              <img src="/images/calendar.png" alt="icon" class="icon" />
              <p>November 11, 2023 (Sunday)</p>
            </span>
            <span class="test">
              <img src="/images/location.png" alt="icon" class="icon" />
              <p>
                Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town,
                Pulau Pinang
              </p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discover;
