import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import Pokemon from '../components/Pokemon';

const pokemon = {
  id: 4,
  name: 'Charmander',
  type: 'Fire',
  averageWeight: {
    value: '8.5',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Charmander_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Alola Route 3',
      map: 'https://cdn2.bulbagarden.net/upload/9/93/Alola_Route_3_Map.png',
    },
    {
      location: 'Kanto Route 3',
      map: 'https://cdn2.bulbagarden.net/upload/4/4a/Kanto_Route_3_Map.png',
    },
    {
      location: 'Kanto Route 4',
      map: 'https://cdn2.bulbagarden.net/upload/2/24/Kanto_Route_4_Map.png',
    },
    {
      location: 'Kanto Rock Tunnel',
      map: 'https://cdn2.bulbagarden.net/upload/6/6f/Kanto_Rock_Tunnel_Map.png',
    },
  ],
  summary: 'The flame on its tail shows the strength of its life'
  + ' force. If it is weak, the flame also burns weakly.',
};

const pokemonRoute = '/pokemons/4';

describe('6. Teste o componente <Pokemon.js />', () => {
  test('01 - Teste se é renderizado um card com as informações de'
  + ' determinado pokémon.', () => {
    const { getByTestId, getByAltText } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite={ false }
    />);
    const pokeNameEl = getByTestId('pokemon-name');
    const pokeTypeEl = getByTestId('pokemon-type');
    const pokeWeightEl = getByTestId('pokemon-weight');
    const pokeImgEl = getByAltText('Charmander sprite');

    expect(pokeNameEl).toHaveTextContent('Charmander');
    expect(pokeTypeEl).toHaveTextContent('Fire');
    expect(pokeWeightEl).toHaveTextContent('Average weight: 8.5 kg');
    expect(pokeImgEl.getAttribute('src'))
      .toBe('https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png');
  });

  test('02 - Teste se o card do Pokémon indicado na Pokédex contém'
  + 'um link de navegação para exibir detalhes deste Pokémon. O link deve'
  + ' possuir a URL /pokemons/<id>, onde <id> é o id do Pokémon exibido;', () => {
    const { getByRole } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite={ false }
    />);
    const linkElement = getByRole('link', { name: /More details/ });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveTextContent('More details');
    expect(linkElement).toHaveAttribute('href', pokemonRoute);
  });

  test('03 - Teste se ao clicar no link de navegação do Pokémon, é feito o '
  + 'redirecionamento da aplicação para a página de detalhes de Pokémon.', () => {
    const { getByRole, history } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite={ false }
    />);
    const linkElement = getByRole('link', { name: /More details/ });
    expect(history.location.pathname).toBe('/');
    userEvent.click(linkElement);
    expect(history.location.pathname).not.toBe('/');
  });

  test('04 - Teste também se a URL exibida no navegador muda para /pokemon/'
  + '<id>, onde <id> é o id do Pokémon cujos detalhes se deseja ver', () => {
    const { getByRole, history } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite={ false }
    />);
    const linkElement = getByRole('link', { name: /More details/ });
    expect(history.location.pathname).toBe('/');
    userEvent.click(linkElement);
    expect(history.location.pathname).toBe(pokemonRoute);
  });

  test('05 - Teste se existe um ícone de estrela nos Pokémons favoritados.', () => {
    const { getByAltText } = renderWithRouter(<Pokemon
      pokemon={ pokemon }
      isFavorite
    />);
    const starIconEl = getByAltText('Charmander is marked as favorite');
    expect(starIconEl).toBeInTheDocument();
    expect(starIconEl).toHaveAttribute('src', '/star-icon.svg');
  });
});
