import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled, { ThemeContext } from 'styled-components';

import Bookmarked from './Bookmarked';
import { PopAnimation } from '../styles/utility';

const MCard = styled.div`background-color: ${({ primary }) => primary};
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
  box-sizing: border-box;
  color: ${({ accent }) => accent};
  display: flex;
  flex-flow: nowrap column;
  margin: 1rem;
  max-width: 350px;
  overflow: hidden;

  a, a:link, a:visited, a:hover, a:active {
    color: inherit;
    font-weight: 500;
    text-decoration: none;
  }
`;

MCard.Content = styled.div`display: flex;
  flex: 1;
  flex-flow: nowrap column;
`;

MCard.ImgContainer = styled.div`height: 200px;
  overflow: hidden;
  position: relative;
`;

MCard.Img = styled.img`background-position: center center;
  object-fit: cover;
  transition: transform cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
  width: 100%;

  :hover { transform: scale(1.1); }
`;

MCard.Text = styled.div`background-position: center;
  display: flex;
  flex-flow: nowrap column;
  padding: 1rem;

  h2, h3 { margin: 0 0 10px; }

  p {
    flex: 1;
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.75;
  }

  h2 { font-size: 1.5rem; }

  h3 { font-size: 1.2rem; }

  h2, p { color: ${({ secondary }) => secondary}; }
`;

MCard.Footer = styled.div`padding: 1rem;

  a:hover { color: ${({ primary }) => primary}; }
`;

const MovieCard = ({ movie: { id, title, subtitle, storyline,
  imagePath, bookmarked } }) => {
  const theme = useContext(ThemeContext);

  const imageCard = () => (
    <MCard.Content>
      <MCard.ImgContainer>
        <Link to={ `movies/${id}` }>
          <MCard.Img src={ imagePath } />
        </Link>
        <Bookmarked bookmarked={ bookmarked } id={ id } className="bookmarked" />
      </MCard.ImgContainer>
      <MCard.Text { ...theme }>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{storyline}</p>
      </MCard.Text>
    </MCard.Content>
  );

  return (
    <PopAnimation>
      <MCard data-testid="movie-card" { ...theme }>
        { imageCard() }
        <MCard.Footer>
          <Link to={ `movies/${id}` }>VER DETALHES</Link>
        </MCard.Footer>
      </MCard>
    </PopAnimation>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.shape(
    {
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      subtitle: PropTypes.string.isRequired,
      storyline: PropTypes.string.isRequired,
      imagePath: PropTypes.string.isRequired,
      bookmarked: PropTypes.bool,
    },
  ).isRequired,
};

export default MovieCard;
