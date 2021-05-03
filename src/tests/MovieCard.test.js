import React from 'react';
import { render } from '@testing-library/react';
import MovieCard from '../components/MovieCard';
import '@testing-library/jest-dom';

describe('Verifica o componente <MovieCard />', () => {
  const movie = {
    title: 'Movie Title 1',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/movie_1',
  };

  it('Renderize o componente', () => {
    render(<MovieCard movie={ movie } />);
  });

  it('Renderize a imagem do filme dentro de uma tag "img"', () => {
    const { getByRole } = render(<MovieCard movie={ movie } />);
    const image = getByRole('img');

    expect(image).toHaveAttribute('src', 'images/movie_1');
  });

  it('Renderize o título do filme', () => {
    const { getByText } = render(<MovieCard movie={ movie } />);

    const title = getByText('Movie Title 1');
    expect(title).toBeInTheDocument();
  });

  it('Renderize o subtítulo do filme', () => {
    const { getByText } = render(<MovieCard movie={ movie } />);

    const subtitle = getByText('Movie Subtitle 1');
    expect(subtitle).toBeInTheDocument();
  });

  it('Renderize a sinopse do filme', () => {
    const { getByText } = render(<MovieCard movie={ movie } />);
    const storyline = getByText('Movie Storyline 1');
    expect(storyline).toBeInTheDocument();
  });

  it('Renderize a avaliação do filme', () => {
    const { getAllByTestId } = render(<MovieCard movie={ movie } />);
    const rating = getAllByTestId('rating');

    expect(rating).toHaveLength(1);
  });

  it('Renderize a avaliação do filme com o valor correto', () => {
    const { getByTestId } = render(<MovieCard movie={ movie } />);
    const startRating = getByTestId('rating');

    expect(startRating).toContainHTML('<span class="rating">4.5</span>');
  });
});
