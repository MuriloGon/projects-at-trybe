import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

const MovieLibrary = ({ movies: moviesProps }) => {
  const [searchText, setSearchText] = useState('');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const [movies] = useState(moviesProps);

  return (
    <>
      <SearchBar
        searchText={ searchText }
        onSearchTextChange={ setSearchText }
        bookmarkedOnly={ bookmarkedOnly }
        onBookmarkedChange={ setBookmarkedOnly }
        selectedGenre={ selectedGenre }
        onSelectedGenreChange={ setSelectedGenre }
      />
      <MovieList movies={ movies } />
    </>
  );
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { MovieLibrary as default };
