import React from 'react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';
import data from '../data';
import { Pokedex } from '../components';

const nextPokemonBtnId = 'next-pokemon';

const data1 = [{
  id: 143,
  name: 'Snorlax',
  type: 'Normal',
  averageWeight: {
    value: '460.0',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Kanto Vermillion City',
      map: 'https://cdn2.bulbagarden.net/upload/5/54/Kanto_Vermilion_City_Map.png',
    },
  ],
  summary: `What sounds like its cry may actually be 
its snores or the rumblings of its hungry belly.`,
}];

const data2 = [{
  id: 143,
  name: 'Snorlax',
  type: 'Normal',
  averageWeight: {
    value: '460.0',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/4/40/Spr_5b_143.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Snorlax_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Kanto Vermillion City',
      map: 'https://cdn2.bulbagarden.net/upload/5/54/Kanto_Vermilion_City_Map.png',
    },
  ],
  summary: `What sounds like its cry may actually be 
its snores or the rumblings of its hungry belly.`,
},
{
  id: 148,
  name: 'Dragonair',
  type: 'Dragon',
  averageWeight: {
    value: '16.5',
    measurementUnit: 'kg',
  },
  image: 'https://cdn2.bulbagarden.net/upload/2/2c/Spr_5b_148.png',
  moreInfo: 'https://bulbapedia.bulbagarden.net/wiki/Dragonair_(Pok%C3%A9mon)',
  foundAt: [
    {
      location: 'Johto Route 45',
      map: 'https://cdn2.bulbagarden.net/upload/2/21/Johto_Route_45_Map.png',
    },
    {
      location: 'Johto Dragon\'s Den',
      map: 'https://cdn2.bulbagarden.net/upload/1/1e/Johto_Dragons_Den_Map.png',
    },
  ],
  summary: `They say that if it emits an aura from its whole
body, the weather will begin to change instantly.`,
}];

describe('5. Teste o componente <Pokedex.js />', () => {
  test('01 - Teste se página contém um heading h2 com o '
  + 'texto Encountered pokémons', () => {
    const { getByRole } = renderWithRouter(<App />);
    const h2Element = getByRole('heading', { name: /Encountered pokémons/i, level: 2 });
    expect(h2Element).toBeInTheDocument(h2Element);
  });

  test('02 - Teste se é exibido o próximo Pokémon da lista'
  + 'quando o botão Próximo pokémon é clicado.', () => {
    const { getByText, getByTestId } = renderWithRouter(<App />);
    const pokeNames = data.map(({ name }) => name);
    const nextBtn = getByTestId(nextPokemonBtnId);
    expect(nextBtn).toBeInTheDocument();
    pokeNames.forEach((pokemon) => {
      expect(getByText(pokemon)).toBeInTheDocument();
      userEvent.click(nextBtn);
    });
    expect(getByText(pokeNames[0])).toBeInTheDocument();
  });

  test('03 - Teste se é mostrado apenas um Pokémon por vez', () => {
    const { getByTestId } = renderWithRouter(<App />);
    const pokeNames = data.map(({ name }) => name);
    const nextBtn = getByTestId(nextPokemonBtnId);
    pokeNames.forEach((pokemonName) => {
      const pokemonNameEl = getByTestId('pokemon-name');
      expect(pokemonNameEl).toBeInTheDocument();
      expect(pokemonNameEl).toHaveTextContent(pokemonName);
      userEvent.click(nextBtn);
    });
  });

  test('04 - Teste se a Pokédex tem os botões de filtro.', () => {
    const { getByTestId, getByRole } = renderWithRouter(<App />);
    const allPokeTypes = data.map(({ type }) => type);
    const allUniqueTypes = ['All', ...new Set(allPokeTypes)];
    const nextBtn = getByTestId(nextPokemonBtnId);
    const clearFilter = getByRole('button', { name: /All/i });

    allUniqueTypes.forEach((pokeType) => {
      const typeFilter = getByRole('button', { name: pokeType });
      userEvent.click(pokeType === 'All' ? clearFilter : typeFilter);
      const pokemonsByTypeFilter = data
        .filter(({ type }) => (pokeType === 'All' ? true : pokeType === type));
      pokemonsByTypeFilter.forEach((poke) => {
        const currentPokemonType = getByTestId('pokemon-type');
        expect(currentPokemonType).toHaveTextContent(poke.type);
        userEvent.click(nextBtn);
      });
    });
  });

  test('06 - Teste se a Pokédex contém um botão para resetar o filtro', () => {
    const { getByTestId, getByRole } = renderWithRouter(<App />);
    const nextBtn = getByTestId(nextPokemonBtnId);
    const clearFilter = getByRole('button', { name: /All/i });
    const pokemons = data;

    expect(nextBtn).toBeInTheDocument();
    expect(nextBtn).toHaveTextContent('Próximo pokémon');

    const allButton = () => {
      pokemons.forEach((pokemon) => {
        const pokeName = getByTestId('pokemon-name');
        const pokeType = getByTestId('pokemon-type');
        expect(pokeName).toHaveTextContent(pokemon.name);
        expect(pokeType).toHaveTextContent(pokemon.type);
        userEvent.click(nextBtn);
      });
    };
    allButton();
    userEvent.click(clearFilter);
    allButton();
  });

  test('07 - Teste se é criado, dinamicamente, um botão de'
  + 'filtro para cada tipo de Pokémon.', () => {
    const render0 = renderWithRouter(
      <Pokedex pokemons={ data1 } isPokemonFavoriteById={ { 143: false } } />,
    );
    const btns0 = render0.getAllByTestId('pokemon-type-button');
    expect(btns0).toHaveLength(1);
    expect(btns0.map((btn) => btn.textContent)).toContain('Normal');
    render0.unmount();

    const render1 = renderWithRouter(
      <Pokedex pokemons={ data2 } isPokemonFavoriteById={ { 143: false, 148: false } } />,
    );
    const btns1 = render1.getAllByTestId('pokemon-type-button');
    expect(btns1).toHaveLength(2);
    expect(btns1.map((btn) => btn.textContent)).toContain('Normal');
    expect(btns1.map((btn) => btn.textContent)).toContain('Dragon');
    render1.unmount();
  });
});
