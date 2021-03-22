import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log('movies', movies);
    return (
      <div>
        {movies.map((movie) => {
          console.log(movie);
          return (
            <MovieCard key={ movie.title.split(' ').join('-') } movie={ movie } />);
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape(
    {
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      img: PropTypes.string.isRequired,
    },
  )).isRequired,
};
