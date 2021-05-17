import React, { useContext, useEffect, useState } from 'react';
import { Link, Redirect, useParams, useRouteMatch } from 'react-router-dom';

import styled, { ThemeContext } from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';
import { Container, PopAnimation } from '../styles/utility';
import { isLoaded, isLoading } from '../redux/actions';

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
    color: ${({ primary2 }) => primary2};
    font-weight: 800;
    margin-left: 1rem;
    padding: 10px;

    &.warning {
      background: ${({ warn }) => warn};

      :hover {
        background-color: ${({ warn2 }) => warn2};
        color: ${({ secondary }) => secondary};
      }
    }

    &.caution {
      background: ${({ caution }) => caution};

      :hover {
        background-color: ${({ caution2 }) => caution2};
        color: ${({ secondary }) => secondary};
      }
    }

    &:active, &:link, &:visited {
      color: unset;
      text-decoration: none;
    }

    &:hover {
      background: ${({ accent2 }) => accent2};
      color: ${({ primary2 }) => primary2};
    }
  }

  .movie-btns {
    display: flex;
    justify-content: space-between;
    padding-block: 1rem;
  }

  .movie-text { padding: 1rem; }

  .movie-genre {
    background-color: ${({ accent }) => accent};
    border-radius: 20px;
    color: ${({ secondary }) => secondary};
    font-weight: 800;
    padding: 0.5rem;
  }


  .movie-rating {
    background-color: ${({ warn }) => warn};
    border-radius: 20px;
    color: ${({ secondary }) => secondary};
    font-weight: 800;
    padding: 0.5rem 1rem;
  }
`;

const fetchMovie = async (id, dipatch, setMovie) => {
  dipatch(isLoading());
  const movie = await movieAPI.getMovie(id);
  dipatch(isLoaded());
  setMovie(movie);
};

const deleteMovie = (id, setRedirect) => {
  movieAPI.deleteMovie(id);
  setRedirect(true);
};

const MovieDetails = () => {
  const [redirect, setRedirect] = useState(false);
  const [movie, setMovie] = useState({});

  const { id } = useParams();
  const { url } = useRouteMatch();

  const reduxDispatch = useDispatch();
  const loading = useSelector(({ loading: load }) => load);

  const theme = useContext(ThemeContext);

  console.log(loading);

  const { title, storyline, imagePath,
    genre, rating, subtitle } = movie;

  useEffect(() => {
    fetchMovie(id, reduxDispatch, setMovie);
  }, [id, reduxDispatch]);

  if (redirect) return <Redirect />;
  if (loading) return <Loading />;

  const info = () => (
    <div className="movie-text">
      <h2>
        { title }
        {' '}
        :
        { subtitle }
        {' '}
      </h2>
      <p>{ `${storyline}` }</p>
      <p>
        <span className="movie-genre">{genre}</span>
        <span className="movie-rating">{rating}</span>
      </p>
    </div>
  );

  return (
    <Container>
      <PopAnimation>
        <Panel data-testid="movie-details" { ...theme }>
          <div className="movie-img">
            <img alt="Movie Cover" src={ `../${imagePath}` } />
          </div>
          {info()}
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
      </PopAnimation>
    </Container>
  );
};

export default MovieDetails;
