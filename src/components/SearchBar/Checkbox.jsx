import React from 'react';
import PropTypes from 'prop-types';

const Checkbox = ({ bookmarkedOnly, onBookmarkedChange }) => (
  <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
    Mostrar somente favoritos
    <input
      id="checkbox-input"
      type="checkbox"
      data-testid="checkbox-input"
      checked={ bookmarkedOnly }
      onChange={ onBookmarkedChange }
    />
  </label>
);

Checkbox.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export { Checkbox as default };
