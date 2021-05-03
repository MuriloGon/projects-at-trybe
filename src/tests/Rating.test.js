import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Rating from '../components/Rating';

describe('Verifica o componente <Rating />', () => {
  it('Renderize o componente', () => {
    render(<Rating />);
  });

  it('Renderize o componente com o valor passado para ele via prop `rating`', () => {
    const expectedRating = 3;
    const { getByTestId } = render(<Rating rating={ 3 } />);
    const rating = getByTestId('rating');

    expect(rating).toHaveTextContent(expectedRating);
  });
});
