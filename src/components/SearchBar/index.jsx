import React from 'react';
import PropTypes from 'prop-types';

import TextInput from './TextInput';
import Checkbox from './CheckboxInput';
import SelectInput from './SelectInput';

const SearchBar = ({
  searchText, onSearchTextChange,
  bookmarkedOnly, onBookmarkedChange,
  selectedGenre, onSelectedGenreChange,
}) => {
  const textInput = { searchText, onSearchTextChange };
  const checkboxInput = { bookmarkedOnly, onBookmarkedChange };
  const selectInput = { selectedGenre, onSelectedGenreChange };

  return (
    <form data-testid="search-bar-form">
      <TextInput { ...textInput } />
      <Checkbox { ...checkboxInput } />
      <SelectInput { ...selectInput } />
    </form>
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export default SearchBar;
