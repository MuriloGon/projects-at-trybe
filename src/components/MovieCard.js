/* eslint-disable max-lines-per-function */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './MovieCard.css';
import 'bulma/css/bulma.min.css';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, storyline, id } = movie;
    return (
      <div className="card movie-card" data-testid="movie-card">
        <div
          className="card-header movie-card__header"
          style={ { backgroundImage: `url(${imagePath})` } }
        >
          <div className="card-header-title movie-card__header-title">
            {title}
          </div>
        </div>
        <div className="card-content movie-card__content">
          {storyline}
        </div>
        <div className="card-footer movie-card__footer">
          <span className="footer-text">
            <Link to={ `movies/${id}` }>VER DETALHES</Link>
          </span>
        </div>
      </div>
    );
  }
}

const movie = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  storyline: PropTypes.string.isRequired,
  imagePath: PropTypes.string.isRequired,
};

MovieCard.propTypes = {
  movie: PropTypes.shape(movie).isRequired,
};

export default MovieCard;
