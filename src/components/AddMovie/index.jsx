import React, { useState } from 'react';

const AddMovie = () => {
  const [title, setTitle] = useState('');

  return (
    <form data-testid="add-movie-form">
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
    </form>
  );
};

export { AddMovie as default };
