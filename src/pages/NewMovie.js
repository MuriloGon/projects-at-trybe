import React, { useState } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';
import { PopAnimation } from '../styles/utility';

const NewMovie = () => {
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = (newMovie) => {
    movieAPI.createMovie(newMovie);
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/" />;

  return (
    <PopAnimation>
      <div data-testid="new-movie">
        <MovieForm onSubmit={ handleSubmit } />
      </div>
    </PopAnimation>
  );
};
export default NewMovie;
