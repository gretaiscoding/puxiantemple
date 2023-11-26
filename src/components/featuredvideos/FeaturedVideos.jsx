import React from 'react';
import './featuredvideos.css';
import { getImageUrl } from '../../utils/tool';

const items = [
  {
    image: 'video-kathina.png',
    title: 'Katina Event',
    caption: '2023 Blessing',
  },
  {
    image: 'video-kathina.png',
    title: 'Katina Event',
    caption: '2023 Blessing',
  },
  {
    image: 'video-kathina.png',
    title: 'Katina Event',
    caption: '2023 Blessing',
  },
];

// Defining a single featured item component
const FeaturedItem = ({ image, title, caption, link }) => (
  <div className="featured-item">
    <img src={getImageUrl(image)} alt={title} className="featured-image" />
    <h3>{title}</h3>
    <p>{caption}</p>
    <a href={link} className="explore-button">
      Explore
    </a>
  </div>
);

// Defining the main Featured Section component
const FeaturedVideos = () => {
  if (!items || items.length === 0) {
    return <div>No featured items to display</div>;
  }

  return (
    <div className="featured-videos-section__container">
      <h2 className="featured-videos-section__header">Videos</h2>
      <div className="featured-videos-section">
        {items.map((item, index) => (
          <FeaturedItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedVideos;
