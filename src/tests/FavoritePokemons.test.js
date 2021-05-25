import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import FavoritePokemons from '../components/FavoritePokemons';

describe('01 - Teste o componente <FavoritePokemons.js />', () => {
  test('Teste se é exibido na tela a mensagem No favorite pokemon found, se a '
  + 'pessoa não tiver pokémons favoritos.', () => {
    const { getByText } = renderWithRouter(<FavoritePokemons pokemons={ [] } />);
    const noPokemonsMsg = getByText(/No favorite pokemon found/i);
    expect(noPokemonsMsg).toBeInTheDocument();
  });

  test('02 - Teste se é exibido todos os cards de pokémons favoritados.', () => {
    const { getByRole, getByText, history } = renderWithRouter(<App />);
    const toFavoritePokemin = (id) => {
      history.push(`/pokemons/${id}`);
      const bookmarkButton = getByRole('checkbox');
      userEvent.click(bookmarkButton);
    };
    toFavoritePokemin('25');
    toFavoritePokemin('4');

    history.push('/favorites');
    expect(getByText(/Pikachu/i)).toBeInTheDocument();
    expect(getByText(/Charmander/i)).toBeInTheDocument();

    toFavoritePokemin('25');
    toFavoritePokemin('4');
  });

  test(`03 - Teste se nenhum card de pokémon é exibido, se ele ${
    +' não estiver favoritado.'}`, () => {
    const { getByText, history } = renderWithRouter(<App />);
    console.log(localStorage);
    history.push('/favorites');
    expect(getByText(/No favorite pokemon found/i)).toBeInTheDocument();
  });
});
