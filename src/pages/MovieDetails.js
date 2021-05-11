import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect, useParams, useRouteMatch } from 'react-router-dom';

import styled, { ThemeContext } from 'styled-components';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Container } from '../styles/utility';

const Panel = styled.div`background-color: ${({ primary }) => primary};
  border-radius: 8px;
  color: ${({ secondary }) => secondary};
  margin: 0 auto;
  max-width: 1200px;
  padding: 1rem;

  .movie-img {
    display: flex;
    height: 250px;
    justify-content: center;
  }

  .movie-img img {
    border-radius: 10px;
    box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.52);
  }

  .movie-btn {
    background: ${({ accent }) => accent};
    border-radius: 4px;
    color: ${({ secondary }) => secondary};
    margin-left: 1rem;
    padding: 10px;

    &.warning { background: ${({ warn }) => warn}; }

    &.caution { background: ${({ caution }) => caution}; }

    &:active, &:link, &:visited {
      color: black;
      text-decoration: none;
    }

    &:hover {
      background: ${({ secondary }) => secondary};
      color: ${({ primary }) => primary};
    }
  }

  .movie-btns {
    display: flex;
    justify-content: space-between;
    padding-block: 1rem;
  }

  .movie-text { padding: 1rem; }
`;

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
  const theme = useContext(ThemeContext);

  const { title, storyline, imagePath,
    genre, rating, subtitle } = movie;

  useEffect(() => {
    fetchMovie(id, setLoading, setMovie);
  }, [id]);

  if (redirect) return <Redirect />;
  if (loading) return <Loading />;

  return (
    <Container>
      <Panel data-testid="movie-details" { ...theme }>
        <div className="movie-img">
          <img alt="Movie Cover" src={ `../${imagePath}` } />
        </div>

        <div className="movie-text">
          <h2>
            <span>
              {`${title}: ${subtitle}`}
            </span>
          </h2>
          <p>{ `${storyline}` }</p>
          <p>{ `${genre}` }</p>
          <p>{ `${rating}` }</p>
        </div>

        <div className="movie-btns">
          <Link className="movie-btn caution" to={ `${url}/edit` }>EDITAR</Link>
          <Link
            className="movie-btn warning"
            to="/"
            onClick={ () => deleteMovie(id, setRedirect) }
          >
            DELETAR
          </Link>
          <Link className="movie-btn" to="/">VOLTAR</Link>
        </div>
      </Panel>
    </Container>
  );
};

export default MovieDetails;
