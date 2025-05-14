import './MovieCard.js';
import React from 'react';

const MovieCard = ({ movie }) => {
  const {title, poster_path, vote_average} = movie;
  const imageUrl = poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/200x300?text=No+Image';

  return (
    <div className='movie-card'>
      <img 
        src={imageUrl}
        alt={title}
      />
      <h3>{title}</h3>
      <p>Rating: {vote_average}</p>
    </div>
  )
};
export default MovieCard;