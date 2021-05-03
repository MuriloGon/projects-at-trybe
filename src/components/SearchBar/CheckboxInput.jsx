import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({ bookmarkedOnly, onBookmarkedChange }) => (
  <label data-testid="checkbox-input-label" htmlFor="checkbox-input">
    Mostrar somente favoritos
    <input
      id="checkbox-input"
      type="checkbox"
      data-testid="checkbox-input"
      checked={ bookmarkedOnly }
      onChange={ ({ target: { checked } }) => onBookmarkedChange(checked) }
    />
  </label>
);

CheckboxInput.propTypes = {
  bookmarkedOnly: PropTypes.bool.isRequired,
  onBookmarkedChange: PropTypes.func.isRequired,
};

export { CheckboxInput as default };
