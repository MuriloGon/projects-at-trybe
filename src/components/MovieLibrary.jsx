import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';

const filteredMovies = (movies, text, isFavorite, selectedGenre) => {
  let filtered = [...movies];

  filtered = filtered.filter(({ title, subtitle, storyline }) => (
    title.toUpperCase().includes(text.toUpperCase())
  || subtitle.toUpperCase().includes(text.toUpperCase())
  || storyline.toUpperCase().includes(text.toUpperCase())));

  filtered = filtered.filter(({ bookmarked }) => (isFavorite
    ? (bookmarked && isFavorite) : true));

  filtered = filtered.filter(({ genre }) => (selectedGenre === ''
    ? true : (selectedGenre === genre)));

  return filtered;
};

const MovieLibrary = ({ movies: moviesProps }) => {
  const [searchText, setSearchText] = useState('');
  const [bookmarkedOnly, setBookmarkedOnly] = useState(false);
  const [selectedGenre, setSelectedGenre] = useState('');
  const movies = filteredMovies(moviesProps, searchText, bookmarkedOnly, selectedGenre);

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
