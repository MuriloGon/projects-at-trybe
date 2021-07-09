import React from 'react';
import renderWithRouter from '../__tests_helpers__/renderWithRouter';
import Footer from '../Components/Footer';

describe('Footer component', () => {
  it('Test if Footer has the correct attribute', () => {
    const { getByTestId } = renderWithRouter(<Footer />); // Verificar se precisa simular login
    const attribute = getByTestId('footer');
    expect(attribute).toBeInTheDocument();
  });

  it('Test if Footer has a drink display link button', () => {
    const { getByTestId } = renderWithRouter(<Footer />); // Verificar se precisa simular login
    const drinkBtn = getByTestId('drinks-bottom-btn');
    expect(drinkBtn).toBeInTheDocument();
  });

  it('Test if Footer has a explore link button', () => {
    const { getByTestId } = renderWithRouter(<Footer />); // Verificar se precisa simular login
    const exploreBtn = getByTestId('explore-bottom-btn');
    expect(exploreBtn).toBeInTheDocument();
  });

  it('Test if Footer has a food display link button', () => {
    const { getByTestId } = renderWithRouter(<Footer />); // Verificar se precisa simular login
    const foodBtn = getByTestId('food-bottom-btn');
    expect(foodBtn).toBeInTheDocument();
  });
});
