import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import { addMovie } from '../redux/actions';
import { PopAnimation } from '../styles/utility';

const NewMovie = () => {
  const [redirect, setRedirect] = useState(false);
  const reduxDispatch = useDispatch();

  const handleSubmit = (newMovie) => {
    reduxDispatch(addMovie(newMovie));
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
