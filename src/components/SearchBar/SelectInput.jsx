import React from 'react';
import PropTypes from 'prop-types';

const options = {
  Todos: '',
  Ação: 'action',
  Comédia: 'comedy',
  Suspense: 'thriller',
};

const SelectInput = ({ selectedGenre, onSelectedGenreChange }) => (
  <label data-testid="select-input-label" htmlFor="select-input">
    Filtrar por gênero
    <select
      id="select-input"
      data-testid="select-input"
      value={ selectedGenre }
      onChange={ onSelectedGenreChange }
    >
      {
        Object.entries(options).map(
          (op, i) => (
            <option
              data-testid="select-option"
              key={ i }
              value={ op[1] }
            >
              {op[0]}
            </option>),
        )
      }
    </select>
  </label>
);

SelectInput.propTypes = {
  selectedGenre: PropTypes.string.isRequired,
  onSelectedGenreChange: PropTypes.func.isRequired,
};

export { SelectInput as default };
