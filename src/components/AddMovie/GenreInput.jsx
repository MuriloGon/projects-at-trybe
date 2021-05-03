import React from 'react';
import PropTypes from 'prop-types';

const options = [
  { innerText: 'Ação', value: 'action' },
  { innerText: 'Comédia', value: 'comedy' },
  { innerText: 'Suspense', value: 'thriller' },
];

const GenreInput = ({ genre, setGenre }) => (
  <label className="label" data-testid="genre-input-label" htmlFor="genre-input">
    Gênero
    <select
      className="select"
      id="genre-input"
      data-testid="genre-input"
      onChange={ ({ target: { value } }) => setGenre(value) }
      value={ genre }
    >
      {options.map(
        (op, i) => (
          <option
            data-testid="genre-option"
            key={ i }
            value={ op.value }
          >
            {op.innerText}
          </option>),
      )}
    </select>
  </label>
);

GenreInput.propTypes = {
  genre: PropTypes.string.isRequired,
  setGenre: PropTypes.func.isRequired,
};

export { GenreInput as default };
