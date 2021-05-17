import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Loading } from '../components';
import MovieCard from '../components/MovieCard';
import { isLoaded, isLoading } from '../redux/actions';

import * as movieAPI from '../services/movieAPI';

const MList = styled.div`display: block;
  overflow: hidden;
`;

MList.Content = styled.div`display: flex;
  flex-flow: wrap row;
  justify-content: flex-start;
  justify-items: flex-start;
  margin: 0 auto;
  max-width: 1200px;
`;

const fetchMovies = (setMovies, dispatch) => {
  dispatch(isLoading());
  movieAPI.getMovies()
    .then((movieFetched) => {
      setMovies(movieFetched);
      dispatch(isLoaded());
    });
};

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const status = useSelector(({ loading }) => loading);
  const reduxDispatch = useDispatch();

  useEffect(() => { fetchMovies(setMovies, reduxDispatch); }, []);

  if (status) return <Loading />;

  return (
    <MList data-testid="movie-list">
      <MList.Content>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </MList.Content>
    </MList>
  );
};

export default MovieList;
