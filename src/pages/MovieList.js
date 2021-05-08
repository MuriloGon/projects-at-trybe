import React, { useEffect, useState } from 'react';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

const fetchMovies = async (currentMovies, setLoading, setMovies) => {
  setLoading(true);
  setMovies([...currentMovies, ...(await movieAPI.getMovies())]);
  setLoading(false);
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (() => { fetchMovies(movies, setLoading, setMovies); })();
  }, []);

  return (
    <div className="movie-list" data-testid="movie-list">
      {loading ? <Loading />
        : movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
    </div>
  );
};

export default MovieList;
