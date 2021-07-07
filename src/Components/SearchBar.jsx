import React, { useState } from 'react';

function SearchBar() {
  const [searchName, setSearchName] = useState('');
  const [searchBar, setSearchBar] = useState('');

  return (
    <>
      <div>
        <input
          type="text"
          data-testid="search-input"
          onChange={ (e) => setSearchName(e.target.value) }
        />
      </div>

      <div>
        <label htmlFor="ingredient">
          Ingrediente
          <input
            type="radio"
            id="ingredient"
            name="ingredient"
            value="ingredient"
            data-testid="ingredient-search-radio"
            onChange={ ({ value }) => setSearchBar(value) }
          />
        </label>

        <label htmlFor="name">
          Nome
          <input
            type="radio"
            id="name"
            name="name"
            value="name"
            data-testid="name-search-radio"
            onChange={ ({ value }) => setSearchBar(value) }
          />
        </label>

        <label htmlFor="first-letter">
          Primeira Letra
          <input
            type="radio"
            id="first-letter"
            name="first-letter"
            value="first-letter"
            data-testid="first-letter-search-radio"
            onChange={ ({ value }) => setSearchBar(value) }
          />
        </label>
      </div>

      <div>
        <button
          type="button"
          data-testid="exec-search-btn"
        >
          Buscar
        </button>
      </div>
    </>
  );
}

export default SearchBar;
