import React, { useState } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

const NewMovie = () => {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (newMovie) => {
    movieAPI.createMovie(newMovie);
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <div data-testid="new-movie">
      <MovieForm onSubmit={ handleSubmit } />
    </div>
  );
};
export default NewMovie;
