import React from 'react';
import { getImageUrl } from '../../../../utils/tool';
import './card.css';

const Card = ({ image_name, label, title, date, address }) => {
  return (
    <div className="discover__card">
      <img
        className="discover__card__image"
        src={getImageUrl(image_name)}
        alt="november"
      />
      <div className="discover__card__content">
        <h4>{title}</h4>
        <p className="discover__card__label">{label}</p>

        <div className="discover__card__date-and-address">
          <span className="test">
            <img
              src={getImageUrl('calendar.png')}
              alt="icon"
              className="discover__card__icon"
            />
            <p>{date}</p>
          </span>
          <span className="test">
            <img
              src={getImageUrl('location.png')}
              alt="icon"
              className="discover__card__icon"
            />
            <p>{address} </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
