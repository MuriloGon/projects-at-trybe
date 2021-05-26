import React from 'react';
import renderWithRouter from './renderWithRouter';
import About from '../components/About';

describe('02. Teste o componente <About.js />', () => {
  test('01 - Teste se a página contém as informações sobre a Pokédex.', () => {
    const { getByText } = renderWithRouter(<About />);
    const titleEl = getByText(/About Pokédex/i);
    const pg1 = getByText(/This application simulates a Pokédex/i);
    const pg2 = getByText(/One can filter Pokémons by type,/i);

    expect(titleEl).toBeInTheDocument();
    expect(pg1).toBeInTheDocument();
    expect(pg2).toBeInTheDocument();
  });

  test('02 - Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    const { getByRole } = renderWithRouter(<About />);
    const titleEl = getByRole('heading', { name: /About Pokédex/i, level: 2 });
    expect(titleEl).toBeInTheDocument();
  });

  test('03 - Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    const { getAllByText } = renderWithRouter(<About />);
    const titleEl = getAllByText((_container, element) => element.tagName === 'P'
    && element.innerHTML.toLowerCase().includes('pokémon'));
    expect(titleEl).toHaveLength(2);
  });

  test(`04 - Teste se a página contém a seguinte imagem de uma Pokédex:${
    +' https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_P'
  }ok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png`, () => {
    const { getByAltText } = renderWithRouter(<About />);
    const imgEl = getByAltText('Pokédex');
    const imgSrc = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    expect(imgEl).toBeInTheDocument();
    expect(imgEl.getAttribute('src')).toBe(imgSrc);
  });
});
