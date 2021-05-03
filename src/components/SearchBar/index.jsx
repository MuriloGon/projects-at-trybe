import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';

const SearchBar = ({ searchText, onSearchTextChange }) => {
  const textInput = { searchText, onSearchTextChange };

  return (
    <form data-testid="search-bar-form">
      <TextInput { ...textInput } />
    </form>
  );
};

SearchBar.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export default SearchBar;
