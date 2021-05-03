import React, { useState } from 'react';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';
import RatingInput from './RatingInput';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [storyline, setStoryline] = useState('');
  const [rating, setRating] = useState(0);

  return (
    <form data-testid="add-movie-form">
      <TitleInput { ...{ title, setTitle } } />
      <SubtitleInput { ...{ subtitle, setSubtitle } } />
      <ImageInput { ...{ imagePath, setImagePath } } />
      <StorylineInput { ...{ storyline, setStoryline } } />
      <RatingInput { ...{ rating, setRating } } />
    </form>
  );
};

export { AddMovie as default };
