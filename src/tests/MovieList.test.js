import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import MovieList from '../components/MovieList';

describe('Verifica o componente <MovieList />', () => {
  const movies = [
    {
      title: 'An awesome title',
      subtitle: 'Movie Subtitle 1',
      storyline: 'Movie Storyline 1',
      rating: 4.5,
      imagePath: 'images/movie_1',
      bookmarked: true,
      genre: 'action',
    },
    {
      title: 'Movie Title 2',
      subtitle: 'An incredible subtitle',
      storyline: 'Movie Storyline 2',
      rating: 4.5,
      imagePath: 'images/movie_2',
      bookmarked: false,
      genre: 'comedy',
    },
    {
      title: 'Movie Title 3',
      subtitle: 'Movie Subtitle 3',
      storyline: 'An great storyline',
      rating: 3,
      imagePath: 'images/movie_3',
      bookmarked: false,
      genre: 'thriller',
    },
  ];

  it('Renderize o componente', () => {
    render(<MovieList movies={ movies } />);
  });

  it('Renderize um componente `<MovieCard />` para cada filme passado como prop', () => {
    const expectedLength = 3;
    const { getAllByTestId } = render(<MovieList movies={ movies } />);
    const movieCards = getAllByTestId('movie-card');

    expect(movieCards).toHaveLength(expectedLength);
  });
});
