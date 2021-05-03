import React from 'react';
import PropTypes from 'prop-types';

const StorylineInput = ({ storyline, setStoryline }) => (
  <label data-testid="storyline-input-label" htmlFor="storyline-input">
    Sinopse
    <input
      id="storyline-input"
      type="text"
      value={ storyline }
      data-testid="storyline-input"
      onChange={ ({ target: { value } }) => setStoryline(value) }
    />
  </label>
);

StorylineInput.propTypes = {
  storyline: PropTypes.string.isRequired,
  setStoryline: PropTypes.func.isRequired,
};

export { StorylineInput as default };
