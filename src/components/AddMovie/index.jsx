import React, { useState } from 'react';
import PropTypes from 'prop-types';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';

const resetState = ({
  setTitle, setSubtitle, setImagePath,
  setStoryline, setRating, setGenre }) => {
  setTitle('');
  setSubtitle('');
  setImagePath('');
  setStoryline('');
  setRating(0);
  setGenre('Action');
};

const AddMovie = ({ onClick }) => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [storyline, setStoryline] = useState('');
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState('Action');

  const handleSubmit = (event) => {
    event.preventDefault();
    onClick({
      title,
      subtitle,
      imagePath,
      rating,
      storyline,
      genre,
    });
    resetState({ setTitle,
      setSubtitle,
      setImagePath,
      setStoryline,
      setRating,
      setGenre });
  };

  return (
    <form data-testid="add-movie-form" onSubmit={ handleSubmit }>
      <TitleInput { ...{ title, setTitle } } />
      <SubtitleInput { ...{ subtitle, setSubtitle } } />
      <ImageInput { ...{ imagePath, setImagePath } } />
      <StorylineInput { ...{ storyline, setStoryline } } />
      <RatingInput { ...{ rating, setRating } } />
      <GenreInput { ...{ genre, setGenre } } />
      <button data-testid="send-button" type="submit">Adicionar filme</button>
    </form>
  );
};

AddMovie.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export { AddMovie as default };
