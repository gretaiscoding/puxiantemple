import React from 'react';
import { getImageUrl } from '../../../../utils/tool';
import './card.css';

const Card = ({ image_name, label, title, date, address }) => {
  return (
    <div className="discover__card">
      <div className="discover__image">
        <img src={getImageUrl(image_name)} alt="november" />
      </div>
      <div className="discover__card__content">
        <h4>{title}</h4>
        <p className="discover__card__label">{label}</p>

        <div className="discover__card__date-and-address">
          <span className="test">
            <img
              src={getImageUrl('calendar.png')}
              alt="icon"
              className="icon"
            />
            <p>{date}</p>
          </span>
          <span className="test">
            <img
              src={getImageUrl('location.png')}
              alt="icon"
              className="icon"
            />
            <p>{address} </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
