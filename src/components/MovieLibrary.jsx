import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SearchBar from './SearchBar';
import MovieList from './MovieList';
import AddMovie from './AddMovie';

import './MovieLibrary.css';

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
  const [movies, setMovies] = useState(moviesProps);
  const filteredmovies = filteredMovies(
    movies, searchText, bookmarkedOnly, selectedGenre,
  );

  return (
    <div className="MovieLibrary container is-fullhd">
      <div className="left-side card">
        <div className="left-wrapper">
          <h4 className="title is-4">Filtrar Filmes</h4>
          <SearchBar
            searchText={ searchText }
            onSearchTextChange={ setSearchText }
            bookmarkedOnly={ bookmarkedOnly }
            onBookmarkedChange={ setBookmarkedOnly }
            selectedGenre={ selectedGenre }
            onSelectedGenreChange={ setSelectedGenre }
          />
          <h4 className="title is-4">Adicionar Filme</h4>
          <AddMovie onClick={ (movie) => setMovies([...movies, movie]) } />

        </div>
      </div>
      <MovieList movies={ filteredmovies } />
    </div>
  );
};

MovieLibrary.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export { MovieLibrary as default };
