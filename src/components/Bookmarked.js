import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Span = styled.span`background: ${({ background }) => background};
  border-bottom-left-radius: 25%;
  color: ${({ secondary }) => secondary};
  cursor: pointer;
  font-size: 2.25rem;
  position: absolute;
  right: 0;
  top: 0;
  user-select: none;
`;

const Bookmarked = ({ id }) => {
  const theme = useContext(ThemeContext);
  const movie = useSelector(
    ({ movies }) => movies.find(({ id: sId }) => id === sId),
  );

  const toggle = () => {
  };

  if (movie === undefined) return null;

  return (
    movie.bookmarked
      ? <Span className="name" onClick={ toggle } { ...theme }>★</Span>
      : <Span onClick={ toggle } { ...theme }>☆</Span>
  );
};

Bookmarked.defaultProps = {
  bookmarked: false,
};

Bookmarked.propTypes = {
  bookmarked: PropTypes.bool,
  id: PropTypes.number.isRequired,
};

export default Bookmarked;
