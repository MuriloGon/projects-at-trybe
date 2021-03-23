import React from 'react';
import PropTypes from 'prop-types';
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
          <h2 className="movie__title">{title}</h2>
          <h3 className="movie__subtitle">{subtitle}</h3>
          <p className="movie__description">{storyline}</p>
        </div>
        <div className="movie__footer">
          <p>
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
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      imagePath: PropTypes.string.isRequired,
    },
  ).isRequired,
};
