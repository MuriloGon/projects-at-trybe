import React from 'react';
import renderWithRouter from './RenderWithRouter';
import Header from '../Components/Header';

describe('Header component', () => {
  it('Test if Header has a h1 tag', () => {
    const { getByTestId } = renderWithRouter(<Header />); // Verificar se precisa simular login
    const heading = getByTestId('page-title');
    expect(heading).toBeInTheDocument();
  });

  it('Test if Header has a profile button', () => {
    const { getByTestId } = renderWithRouter(<Header />); // Verificar se precisa simular login
    const profileBtn = getByTestId('profile-top-btn');
    expect(profileBtn).toBeInTheDocument();
  });

  it('Test if Header has a search button', () => {
    const { getByTestId } = renderWithRouter(<Header />); // Verificar se precisa simular login
    const searchBtn = getByTestId('search-top-btn');
    expect(searchBtn).toBeInTheDocument();
  });
});
