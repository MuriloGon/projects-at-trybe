import React, { useState } from 'react';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

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
      <label data-testid="subtitle-input-label" htmlFor="subtitle-input">
        Subtítulo
        <input
          id="subtitle-input"
          type="text"
          value={ subtitle }
          data-testid="subtitle-input"
          onChange={ ({ target: { value } }) => setSubtitle(value) }
        />
      </label>
    </form>
  );
};

export { AddMovie as default };
