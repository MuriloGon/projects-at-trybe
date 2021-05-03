import React from 'react';
import PropTypes from 'prop-types';

const RatingInput = ({ rating, setRating }) => (
  <label className="label" data-testid="rating-input-label" htmlFor="rating-input">
    Avaliação
    <input
      className="input"
      id="rating-input"
      type="number"
      value={ rating }
      data-testid="rating-input"
      onChange={ ({ target: { value } }) => setRating(value) }
    />
  </label>
);

RatingInput.propTypes = {
  rating: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  setRating: PropTypes.func.isRequired,
};

RatingInput.defaultProps = {
  rating: 0,
};

export { RatingInput as default };
