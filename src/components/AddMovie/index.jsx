import React, { useState } from 'react';

import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';
import StorylineInput from './StorylineInput';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imagePath, setImagePath] = useState('');
  const [storyline, setStoryline] = useState('');

  return (
    <form data-testid="add-movie-form">
      <TitleInput { ...{ title, setTitle } } />
      <SubtitleInput { ...{ subtitle, setSubtitle } } />
      <ImageInput { ...{ imagePath, setImagePath } } />
      <StorylineInput { ...{ storyline, setStoryline } } />
    </form>
  );
};

export { AddMovie as default };
