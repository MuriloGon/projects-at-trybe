import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import Header from '../components/Header';

describe('Verifica o componente <Header />', () => {
  it('Renderize o componente', () => {
    render(<Header />);
  });

  it('Inclua o texto "Movie Cards Library" dentro do heading ', () => {
    const { getByRole } = render(<Header />);
    const header = getByRole('heading');

    expect(header).toHaveTextContent('Movie Cards Library');
  });
});
