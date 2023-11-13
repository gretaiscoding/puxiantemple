import React from 'react';
import { getImageUrl } from '../../../../utils/form-tools';

const Card = ({ image_name, label, title, date, address }) => {
  return (
    <div class="discover__card">
      <div class="discover__image">
        <img src={getImageUrl(image_name)} alt="november" />
      </div>
      <div class="discover__card__content">
        <span class="label">{label}</span>
        <h4>{title}</h4>
        <span class="test">
          <img src={getImageUrl('calendar.png')} alt="icon" class="icon" />
          <p>{date}</p>
        </span>
        <span class="test">
          <img src={getImageUrl('location.png')} alt="icon" class="icon" />
          <p>{address} </p>
        </span>
      </div>
    </div>
  );
};

export default Card;
