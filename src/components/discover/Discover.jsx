import React from 'react';
import './discover.css';
import { getImageUrl } from '../../utils/form-tools';
import Card from './components/card/Card';

const Discover = () => {
  return (
    <section class="section__container">
      <header className="discover__header">
        <h1>Our Upcoming Events</h1>
        <button class="button-gold">View All</button>
      </header>

      <div class="discover__card-container">
        <Card
          title={'Puxian Pusa'}
          date={'November 11, 2023 (Sunday)'}
          label={'FREE ENTRY'}
          image_name={'about.jpg'}
          address={` Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town,
          Pulau Pinang`}
        />
        <Card
          title={'Puxian Pusa'}
          date={'November 11, 2023 (Sunday)'}
          label={'NO ENTRY'}
          image_name={'about.jpg'}
          address={` Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town,
          Pulau Pinang`}
        />

        <Card
          title={'Puxian Pusa'}
          date={'November 11, 2023 (Sunday)'}
          label={'FREE ENTRY'}
          image_name={'about.jpg'}
          address={` Puxian Temple, Jalan Bukit Dumbar, Jelutong, 11600 George Town,
          Pulau Pinang`}
        />
      </div>
    </section>
  );
};

export default Discover;
