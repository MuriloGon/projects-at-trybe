import React from 'react';
import renderWithRouter from '../__tests_helpers__/renderWithRouter';
import Perfil from '../pages/Application/Perfil';

describe('Profile component', () => {
  it('test if user e-mail is visible in the screen', () => {
    const { getByTestId } = renderWithRouter(<Perfil />);
    const email = getByTestId('profile-email');
    expect(email).toBeInTheDocument();
  });

  it('test if "Receitas Feitas" button is visible in the screen', () => {
    const { getByTestId } = renderWithRouter(<Perfil />);
    const doneRecipes = getByTestId('profile-done-btn');
    expect(doneRecipes).toBeInTheDocument();
  });

  it('test if "Receitas Favoritas" button is visible in the screen', () => {
    const { getByTestId } = renderWithRouter(<Perfil />);
    const favoriteRecipes = getByTestId('profile-favorite-btn');
    expect(favoriteRecipes).toBeInTheDocument();
  });

  it('test if logout button is visible in the screen', () => {
    const { getByTestId } = renderWithRouter(<Perfil />);
    const logoutBtn = getByTestId('profile-logout-btn');
    expect(logoutBtn).toBeInTheDocument();
  });
});
