import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import renderWithRouter from './renderWithRouter';

const pokemon = {
  id: 23,
  name: 'Ekans',
  type: 'Poison',
  averageWeight: {
    value: '6.9',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/1/18/Spr_5b_023.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Ekans_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Goldenrod Game Corner',
      map: 'https://cdn2.bulbagarden.net/upload/e/ec/Johto_Goldenrod_City_Map.png',
    },
  ],
  summary: 'It can freely detach its jaw to swallow large'
  + ' prey whole. It can become too heavy to move, however.',
};

describe('07. Teste o componente <PokemonDetails.js />', () => {
  test('01 - Teste se as informações detalhadas do Pokémon selecionado'
  + ' são mostradas na tela.', () => {
    const { getByText, getByRole, queryByRole, history } = renderWithRouter(
      <App />,
    );
    history.push(`/pokemons/${pokemon.id}`);
    const pokeNameElement = getByText(`${pokemon.name} Details`);
    const pokeDetailsLink = queryByRole('link', { name: /More details/ });
    const headingEl = getByRole('heading', { name: /Summary/, level: 2 });
    const paragraph = getByText(pokemon.summary);
    expect(pokeNameElement).toBeInTheDocument();
    expect(pokeDetailsLink).not.toBeInTheDocument();
    expect(headingEl).toBeInTheDocument();
    expect(paragraph.tagName).toBe('P');
    expect(paragraph).toHaveTextContent(pokemon.summary);
  });

  test('02 - Teste se existe na página uma seção com os mapas contendo'
  + ' as localizações do pokémon', () => {
    const { getByText, getByRole, getByAltText, history } = renderWithRouter(
      <App />,
    );
    history.push('/pokemons/23');
    const h2Locations = getByRole('heading', { name: /Game Locations of Ekans/ });
    expect(h2Locations).toBeInTheDocument();

    const locations = pokemon.foundAt;
    locations.forEach(({ location, map }) => {
      const imgEl = getByAltText(`${pokemon.name} location`);
      const locEl = getByText(location);
      expect(locEl).toBeInTheDocument();
      expect(imgEl).toHaveAttribute('src', map);
    });
  });

  test('03 - Teste se o usuário pode favoritar um pokémon através '
  + 'da página de detalhes.', () => {
    const { getByRole, queryByAltText, getByText, history } = renderWithRouter(
      <App />,
    );
    history.push('/pokemons/23');
    const favoriteCheckbox = getByRole('checkbox');
    expect(favoriteCheckbox).toBeInTheDocument();

    expect(queryByAltText('Ekans is marked as favorite')).not.toBeInTheDocument();

    userEvent.click(favoriteCheckbox);
    expect(queryByAltText('Ekans is marked as favorite')).toBeInTheDocument();

    const checkboxLabel = getByText('Pokémon favoritado?');
    expect(checkboxLabel.tagName).toBe('LABEL');
    expect(checkboxLabel.getAttribute('for')).toBe('favorite');
  });
});
