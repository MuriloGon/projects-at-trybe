import React from 'react';
// import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import { IMovie } from './Interfaces';

interface IProps {
  movies: Array<IMovie>;
}

export class MovieList extends React.Component<IProps> {
  render() {
    const { movies } = this.props;

    return (
      <div data-testid="movie-list" className="movie-list">
        { movies.map((movie) => {
          const key = [...movie.title.split(' '), ...movie.title.split(' ')].join('-');
          return <MovieCard key={key} movie={movie} />;
        })}
      </div>
    );
  }
}

// MovieList.propTypes = {
//   movies: PropTypes.arrayOf(
//     PropTypes.object,
//   ).isRequired,
// };react-app-env.d
export default MovieList;
