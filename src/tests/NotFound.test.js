import React from 'react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Teste o componente <NotFound.js />', () => {
  test('01 - Teste se página contém um heading h2 com o'
    + ' texto Page requested not found 😭;', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/random page');
    const h2Element = getByText(/Page requested not found/i);
    expect(h2Element).toBeInTheDocument();
  });
  test('este se página mostra a imagem '
  + ' https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    const { getByAltText, history } = renderWithRouter(<App />);
    history.push('/random page');
    const sadMsg = /Pikachu crying because the page requested was not found/i;
    const expectedSrc = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
    const sadPikachu = getByAltText(sadMsg);
    expect(sadPikachu.getAttribute('src')).toBe(expectedSrc);
  });
});
