import React from 'react';
import PropTypes from 'prop-types';

const RatingInput = ({ rating, setRating }) => (
  <label data-testid="rating-input-label" htmlFor="rating-input">
    Avaliação
    <input
      id="rating-input"
      type="number"
      value={ rating }
      data-testid="rating-input"
      onChange={ ({ target: { value } }) => setRating(value) }
    />
  </label>
);

RatingInput.propTypes = {
  rating: PropTypes.string.isRequired,
  setRating: PropTypes.func.isRequired,
};

export { RatingInput as default };