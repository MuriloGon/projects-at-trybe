import React, { useState } from 'react';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';
import GenreInput from './GenreInput';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [storyline, setStoryline] = useState('');
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState('Action');

  return (
    <form data-testid="add-movie-form">
      <TitleInput { ...{ title, setTitle } } />
      <SubtitleInput { ...{ subtitle, setSubtitle } } />
      <ImageInput { ...{ imagePath, setImagePath } } />
      <StorylineInput { ...{ storyline, setStoryline } } />
      <RatingInput { ...{ rating, setRating } } />
      <GenreInput { ...{ genre, setGenre } } />
    </form>
  );
};

export { AddMovie as default };
