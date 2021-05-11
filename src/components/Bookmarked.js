import React, { useContext, useState } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import * as movieAPI from '../services/movieAPI';

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

const Bookmarked = ({ bookmarked, id }) => {
  const theme = useContext(ThemeContext);
  const [redirect, setRedirect] = useState(false);

  const toggle = () => {
    movieAPI.updateBookmark(id);
    setRedirect(true);
  };

  if (redirect) return <Redirect to="/" />;

  return (
    bookmarked
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
