import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';

import * as movieAPI from '../services/movieAPI';

const MList = styled.div`display: block;
`;

MList.Content = styled.div`display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  justify-items: flex-start;
  margin: 0 auto;
  max-width: 1200px;
`;

const fetchMovies = (setLoading, setMovies) => {
  setLoading(true);
  movieAPI.getMovies()
    .then((movieFetched) => {
      setMovies(movieFetched);
      setLoading(false);
    });
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { fetchMovies(setLoading, setMovies); }, []);

  if (loading) return <Loading />;

  return (
    <MList className="movie-list" data-testid="movie-list">
      <MList.Content>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </MList.Content>
    </MList>
  );
};

export default MovieList;
