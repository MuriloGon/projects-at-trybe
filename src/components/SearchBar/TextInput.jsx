import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({ searchText, onSearchTextChange }) => (
  <label data-testid="text-input-label" htmlFor="text-input">
    Inclui o texto
    <input
      id="text-input"
      type="text"
      data-testid="text-input"
      value={ searchText }
      onChange={ onSearchTextChange }
    />
  </label>
);

TextInput.propTypes = {
  searchText: PropTypes.string.isRequired,
  onSearchTextChange: PropTypes.func.isRequired,
};

export { TextInput as default };
