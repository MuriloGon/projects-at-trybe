import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeContext } from 'styled-components';
import { Container } from '../styles/utility';

const Form = styled.form`background-color: ${({ primary }) => primary};
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.35);
  margin: 1.5rem auto;
  max-width: 900px;
  padding: 1rem;

  .form-input {
    padding: 1rem;
  }

  .form-input span {
    color: ${({ secondary }) => secondary};
    display: block;
    font-size: 1.25rem;
  }

  h1 {
    color: ${({ secondary }) => secondary};
    margin: 0;
    padding: 1rem;
  }

  input, textarea, select, button {
    background-color: ${({ accent2 }) => accent2};
    border: none;
    border-radius: 8px;
    font-size: 1.1rem;
    padding: 0.5rem;
    width: 100%;

    &:focus {
      outline: 2px solid ${({ accent }) => accent};
    }
  }

  .form-input textarea {
    height: 130px;
    resize: none;
  }

  .form-selectables { display: flex; }

  .form-row {
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
  }

  .form-col { flex: 1;}

  .form-footer {
    align-items: center;
    display: flex;
    justify-content: flex-start;
  }

  .form-btn-submit {
    background-color: ${({ accent }) => accent};
    color: ${({ secondary }) => secondary};
    cursor: pointer;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.5rem;
  }

  .form-btn-submit:hover {
    background-color: ${({ accent2 }) => accent2};
  }
`;

const renderTitleInput = ({ title }, updateMovie) => (
  <div className="form-input">
    <label htmlFor="movie_title">
      <span>Título</span>
      <input
        placeholder="Insira o título"
        id="movie_title"
        type="text"
        className="validate"
        value={ title }
        onChange={ ({ target: { value } }) => updateMovie('title', value) }
      />
    </label>
  </div>
);

const renderSubtitleInput = ({ subtitle }, updateMovie) => (
  <div className="form-input">
    <label htmlFor="movie_subtitle">
      <span>Subtítulo</span>
      <input
        placeholder="Insira o subtítulo"
        id="movie_subtitle"
        type="text"
        value={ subtitle }
        onChange={ ({ target: { value } }) => updateMovie('subtitle', value) }
      />
    </label>
  </div>
);

const renderImagePathInput = ({ imagePath }, updateMovie) => (
  <div className="form-input">
    <label htmlFor="movie_image">
      <span>Imagem</span>
      <input
        placeholder="Insira o caminho da imagem"
        id="movie_image"
        type="text"
        value={ imagePath }
        onChange={ ({ target: { value } }) => updateMovie('imagePath', value) }
      />
    </label>
  </div>
);

const renderStorylineInput = ({ storyline }, updateMovie) => (
  <div className="form-input">
    <label htmlFor="movie_storyline">
      <span>Sinopse</span>
      <textarea
        id="movie_storyline"
        value={ storyline }
        onChange={ ({ target: { value } }) => updateMovie('storyline', value) }
      />
    </label>
  </div>
);

const renderGenreSelection = ({ genre }, updateMovie) => (
  <div className="form-input">
    <label htmlFor="movie_genre">
      <span>Gênero</span>
      <select
        id="movie_genre"
        value={ genre }
        onChange={ ({ target: { value } }) => updateMovie('genre', value) }
      >
        <option value="action">Ação</option>
        <option value="comedy">Comédia</option>
        <option value="thriller">Suspense</option>
        <option value="fantasy">Fantasia</option>
      </select>
    </label>
  </div>
);

const renderRatingInput = ({ rating }, updateMovie) => (
  <div className="form-input">
    <label htmlFor="movie_rating">
      <span>
        Avaliação
      </span>
      <input
        placeholder="Dê a avaliação do filme"
        id="movie_rating"
        type="number"
        step={ 0.1 }
        min={ 0 }
        max={ 5 }
        value={ rating }
        onChange={ ({ target: { value } }) => updateMovie('rating', value) }
      />
    </label>
  </div>
);

const renderSubmitButton = (stateForm, handleSubmit) => (
  <div className="form-input">
    <button
      type="submit"
      className="form-btn-submit"
      onClick={ (e) => { handleSubmit(stateForm); e.preventDefault(); } }
    >
      Submit
    </button>
  </div>
);

const defaultState = {
  title: '',
  subtitle: '',
  imagePath: '',
  storyLine: '',
  genre: 'action',
  rating: 0,
};

const MovieForm = ({ onSubmit, movie }) => {
  const theme = useContext(ThemeContext);
  const [formState, setFormState] = useState(defaultState);
  const updateMovie = (field, newValue, state = formState) => {
    setFormState({ ...state, [field]: newValue });
  };

  useEffect(() => { setFormState(movie || defaultState); }, [movie]);

  return (
    <Container style={ { height: '100%' } }>
      <Form { ...theme } onSubmit={ () => { onSubmit(formState); } }>
        <h1>Adicionar Cartão</h1>
        <div className="form-row">
          <div className="form-col">
            {renderTitleInput(formState, updateMovie)}
            {renderSubtitleInput(formState, updateMovie)}
            {renderImagePathInput(formState, updateMovie)}
          </div>
          <div className="form-col">
            {renderStorylineInput(formState, updateMovie)}
            <div className="form-selectables">
              {renderGenreSelection(formState, updateMovie)}
              {renderRatingInput(formState, updateMovie)}
            </div>
          </div>

        </div>
        <div className="form-footer">
          {renderSubmitButton(formState, onSubmit)}
        </div>
      </Form>
    </Container>
  );
};

MovieForm.defaultProps = {
  movie: defaultState,
};

MovieForm.propTypes = {
  movie: PropTypes.shape(
    {
      title: PropTypes.string,
      subtitle: PropTypes.string,
      imagePath: PropTypes.string,
      storyLine: PropTypes.string,
      genre: PropTypes.string,
      rating: PropTypes.number,
    },
  ),
  onSubmit: PropTypes.func.isRequired,
};

export default MovieForm;
