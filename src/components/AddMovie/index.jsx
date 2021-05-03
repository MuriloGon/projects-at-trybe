import React, { useState } from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';
import ImageInput from './ImageInput';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [imagePath, setImagePath] = useState('');

  return (
    <form data-testid="add-movie-form">
      <TitleInput { ...{ title, setTitle } } />
      <SubtitleInput { ...{ subtitle, setSubtitle } } />
      <ImageInput { ...{ imagePath, setImagePath } } />
    </form>
  );
};

export { AddMovie as default };
