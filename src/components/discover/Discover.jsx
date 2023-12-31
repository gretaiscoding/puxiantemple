import React from 'react';
import './discover.css';
import Card from './components/card/Card';

const Discover = () => {
  return (
    <section className="section__container discover__container">
      <header className="discover__header">
        <h1>Our Upcoming Events</h1>
      </header>

      <div className="discover__card-container">
        <Card
          title={'Opening of Pu Xian Statue'}
          date={'December 10, 2023 (Sunday)'}
          label={'FREE ENTRY'}
          image_name={'opening.jpeg'}
          address={`Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town, Pulau Pinang`}
        />
        <Card
          title={'Puxian Birthday'}
          date={'March 30, 2024 (Sunday)'}
          label={'FREE ENTRY'}
          image_name={'opening.jpeg'}
          address={`Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town, Pulau Pinang`}
        />
        <Card
          title={'Blood Donation'}
          date={'April 8, 2024 (Sunday)'}
          label={'FREE ENTRY'}
          image_name={'opening.jpeg'}
          address={`Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town, Pulau Pinang`}
        />
      </div>

      <button className="button-gold">View All</button>
    </section>
  );
};

export default Discover;
