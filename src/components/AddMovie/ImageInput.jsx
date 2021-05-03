import React from 'react';
import PropTypes from 'prop-types';

const ImageInput = ({ imagePath, setImagePath }) => (
  <label className="label" data-testid="image-input-label" htmlFor="image-input">
    Imagem
    <input
      className="input"
      id="image-input"
      type="text"
      value={ imagePath }
      data-testid="image-input"
      onChange={ ({ target: { value } }) => setImagePath(value) }
    />
  </label>
);

ImageInput.propTypes = {
  imagePath: PropTypes.string.isRequired,
  setImagePath: PropTypes.func.isRequired,
};

export { ImageInput as default };
