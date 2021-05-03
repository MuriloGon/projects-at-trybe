import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import Checkbox from './Checkbox';

const SearchBar = ({
  searchText, onSearchTextChange,
  bookmarkedOnly, onBookmarkedChange,
}) => {
  const textInput = { searchText, onSearchTextChange };
  const checkboxInput = { bookmarkedOnly, onBookmarkedChange };

  return (
    <form data-testid="search-bar-form">
      <TextInput { ...textInput } />
      <Checkbox { ...checkboxInput } />
    </form>
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export default SearchBar;
