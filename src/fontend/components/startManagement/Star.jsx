import React from 'react';
import style from './Star.module.css';

const StarRatingDisplay = ({ rating, isActiveMouseEnter, fillColor }) => {
  // Calculate the number of full stars, half stars, and empty stars
  const fullStars = Math.floor(rating);
  //halfStar   
  const hasHalfStar = rating % 1 !== 0;
  //emptyStar
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  // Create an array of stars to render
  const stars = [];

  for (let i = 0; i < fullStars; i++) {
    stars.push(<span key={i} className={`${style.star} ${style.full_star}`}></span>);
  }

  if (hasHalfStar) {
    stars.push(<span key="half" className={`${style.star} ${style.half_star}`}></span>);
  }

  for (let i = 0; i < emptyStars; i++) {
    stars.push(<span key={`empty-${i}`} className={`${style.star} ${style.empty_star}`}></span>);
  }

  return <div className={`${style.star_rating} ${isActiveMouseEnter ? style.isActiveMouseEnter : null}`}>{stars}</div>;
};

export default StarRatingDisplay;