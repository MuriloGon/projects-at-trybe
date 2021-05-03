import React, { useState } from 'react';
import TitleInput from './TitleInput';
import SubtitleInput from './SubtitleInput';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');

  return (
    <form data-testid="add-movie-form">
      <TitleInput { ...{ title, setTitle } } />
      <SubtitleInput { ...{ subtitle, setSubtitle } } />

    </form>
  );
};

export { AddMovie as default };
