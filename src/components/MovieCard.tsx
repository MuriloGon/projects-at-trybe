/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
// import PropTypes from 'prop-types';
import Rating from './Rating';
import { IMovie } from './Interfaces';
import 'bulma/css/bulma.min.css';
import './MovieCard.css';

interface Props {
  movie: IMovie;
}
class MovieCard extends React.Component<Props> {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <div className="card movie-card" data-testid="movie-card">
        <img alt="Movie Cover" className="movie-card-image card-image" src={imagePath} />
        <div className="movie-card-body card-content">
          <h4 data-testid="movie-card-title" className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div className="card-footer">
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

// MovieCard.propTypes = {
//   movie: PropTypes.shape({
//     title: PropTypes.string,
//     subtitle: PropTypes.string,
//     storyline: PropTypes.string,
//     rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     imagePath: PropTypes.string,
//   }).isRequired,
// };

export default MovieCard;
