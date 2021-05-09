import React, { useEffect, useState } from 'react';
import { Redirect, useParams } from 'react-router';

import { Loading, MovieForm } from '../components';
import * as movieAPI from '../services/movieAPI';

const fetchMovieData = async (id, setMovie, setStatus) => {
  setStatus('loading');
  const movie = await movieAPI.getMovie(id);
  setMovie(movie);
  setStatus('not loading');
};

const EditMovie = () => {
  const [status, setStatus] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();

  useEffect(() => { fetchMovieData(id, setMovie, setStatus); }, [id]);

  const handleSubmit = async (updatedMovie) => {
    await movieAPI.updateMovie(updatedMovie);
    setShouldRedirect(true);
  };

  if (shouldRedirect) return <Redirect to="/" />;
  if (status === 'loading') return <Loading />;

  return (
    <div data-testid="edit-movie">
      <MovieForm movie={ movie } onSubmit={ handleSubmit } />
    </div>
  );
};

export default EditMovie;
