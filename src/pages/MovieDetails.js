import React, { useEffect, useState } from 'react';
import { Link, Redirect, useParams, useRouteMatch } from 'react-router-dom';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

const fetchMovie = async (id, setLoading, setMovie) => {
  const movie = await movieAPI.getMovie(id);
  setLoading(false);
  setMovie(movie);
};

const deleteMovie = (id, setRedirect) => {
  movieAPI.deleteMovie(id);
  setRedirect(true);
};

const MovieDetails = () => {
  const [loading, setLoading] = useState(true);
  const [redirect, setRedirect] = useState(false);
  const [movie, setMovie] = useState({});
  const { id } = useParams();
  const { url } = useRouteMatch();

  const { title, storyline, imagePath,
    genre, rating, subtitle } = movie;

  useEffect(() => {
    fetchMovie(id, setLoading, setMovie);
  }, [id]);

  if (redirect) return <Redirect />;

  return loading ? <Loading /> : (
    <div data-testid="movie-details">
      <img alt="Movie Cover" src={ `../${imagePath}` } />
      <p>{ `Subtitle: ${title}` }</p>
      <p>{ `Subtitle: ${subtitle}` }</p>
      <p>{ `Storyline: ${storyline}` }</p>
      <p>{ `Genre: ${genre}` }</p>
      <p>{ `Rating: ${rating}` }</p>

      <Link to={ `${url}/edit` }>EDITAR</Link>
      <Link to="/" onClick={ () => deleteMovie(id, setRedirect) }>
        DELETAR
      </Link>
      <Link to="/">VOLTAR</Link>
    </div>
  );
};

export default MovieDetails;
