import React, { useState } from 'react';
import PropTypes from 'prop-types';

const MovieLibrary = ({ movies: moviesProps }) => {
  const [searchText, setSearchText] = useState('');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies] = useState(moviesProps);

  return (
    <h1>MovieLibrary</h1>
  );
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { MovieLibrary as default };
