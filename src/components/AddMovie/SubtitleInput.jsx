import React from 'react';
import PropTypes from 'prop-types';

const SubtitleInput = ({ subtitle, setSubtitle }) => (
  <label className="label" data-testid="subtitle-input-label" htmlFor="subtitle-input">
    Subtítulo
    <input
      className="input"
      id="subtitle-input"
      type="text"
      value={ subtitle }
      data-testid="subtitle-input"
      onChange={ ({ target: { value } }) => setSubtitle(value) }
    />
  </label>
);

SubtitleInput.propTypes = {
  subtitle: PropTypes.string.isRequired,
  setSubtitle: PropTypes.func.isRequired,
};

export { SubtitleInput as default };
