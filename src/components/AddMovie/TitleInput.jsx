import React from 'react';
import PropTypes from 'prop-types';

const TitleInput = ({ title, setTitle }) => (
  <label data-testid="title-input-label" htmlFor="title-input">
    Título
    <input
      id="title-input"
      type="text"
      value={ title }
      data-testid="title-input"
      onChange={ ({ target: { value } }) => setTitle(value) }
    />
  </label>
);

TitleInput.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
};

export { TitleInput as default };
