import React from 'react';
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, rating, description, img } = movie;
    console.log('movie', movie);
    return (
      <div className="movie">
        <div className="movie__image">
          <img src={ img } alt={ title } />
        </div>
        <div className="movie__content">
          <h2>{title}</h2>
          <h2>{subtitle}</h2>
        </div>
        <div className="movie__description">
          <p>{description}</p>
        </div>
        <div className="movie__footer">
          <p>
            Rating
            <span>{rating}</span>
          </p>
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
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    },
  ).isRequired,
};
