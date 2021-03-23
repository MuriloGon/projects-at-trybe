import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
import './MovieCard.css';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movie">
        <div className="movie__image">
          <img src={ imagePath } alt={ title } />
        </div>
        <div className="movie__content">
          <h4 className="movie__title">{title}</h4>
          <h5 className="movie__subtitle">{subtitle}</h5>
          <p className="movie__description">{storyline}</p>
        </div>
        <div className="movie__footer">
          <Rating rate={ rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    },
  ).isRequired,
};
