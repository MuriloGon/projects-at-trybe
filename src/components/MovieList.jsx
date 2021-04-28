import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import './MovieList.css';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="MovieList">
        {movies.map((movie) => (
          <MovieCard key={ movie.title } movie={ movie } />))}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      rating: PropTypes.number,
      imagePath: PropTypes.string.isRequired,
    },
  )).isRequired,
};
