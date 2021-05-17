import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect, useParams } from 'react-router';

import { Loading, MovieForm } from '../components';
import { editMovie, isLoaded, isLoading } from '../redux/actions';
import * as movieAPI from '../services/movieAPI';
import { PopAnimation } from '../styles/utility';

const fetchMovieData = async (id, setMovie, dispatch) => {
  dispatch(isLoading());
  const movie = await movieAPI.getMovie(id);
  setMovie(movie);
  dispatch(isLoaded());
};

const EditMovie = () => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  const status = useSelector(({ loading }) => loading);
  const reduxDispatch = useDispatch();

  useEffect(() => { fetchMovieData(id, setMovie, reduxDispatch); }, [id, reduxDispatch]);

  const handleSubmit = async (updatedMovie) => {
    reduxDispatch(editMovie(updatedMovie));
    setShouldRedirect(true);
  };

  if (shouldRedirect) return <Redirect to="/" />;
  if (status) return <Loading />;

  return (
    <PopAnimation>
      <div data-testid="edit-movie" className="anim">
        <MovieForm movie={ movie } onSubmit={ handleSubmit } />
      </div>
    </PopAnimation>
  );
};

export default EditMovie;
