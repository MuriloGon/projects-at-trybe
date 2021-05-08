import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie: { id, title, subtitle, storyline } }) => (
  <div data-testid="movie-card">
    <h2>{title}</h2>
    <h3>{subtitle}</h3>
    <h1>{storyline}</h1>
    <Link to={ `movies/${id}` }>VER DETALHES</Link>
  </div>
);

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
    },
  ).isRequired,
};

export default MovieCard;
