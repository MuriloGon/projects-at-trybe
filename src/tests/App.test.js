import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { fireEvent, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from './renderWithRouter';
import App from '../App';

const linkCb = (_cont, el, text, classname) => el.classList.contains(classname)
&& el.innerHTML.includes(text);

describe('Teste o componente <App.js />', () => {
  test('renders a reading with the text `Pokédex`', () => {
    const { getByText } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>,
    );
    const heading = getByText(/Pokédex/i);
    expect(heading).toBeInTheDocument();
  });

  test('Teste se a página principal da Pokédex é renderizada ao carregar a'
      + ' aplicação no caminho de URL /', () => {
    const { history } = renderWithRouter((
      <App />));

    expect(history.location.pathname).toBe('/');
    expect(history.location.pathname).not.toBe('/404');
  });

  test('Teste se o topo da aplicação contém um conjunto fixo'
+ ' de links de navegação.', () => {
    const { getByText } = renderWithRouter(<App />);
    const linkText = [/Home/, /About/, /Favorite Pokémons/];

    linkText.forEach((textRegex) => {
      const el = getByText(textRegex);
      expect(el).toBeInTheDocument();
      expect(el.parentElement.tagName).toBe('NAV');
    });
  });

  test('Teste se a aplicação é redirecionada para a página inicial,'
+ ' na URL / ao clicar no link Home da barra de navegação.', () => {
    const { getByText, history } = renderWithRouter(<App />);
    const homeEl = getByText((cont, el) => linkCb(cont, el, 'Home', 'link'));
    const AboutEl = getByText((cont, el) => linkCb(cont, el, 'About', 'link'));

    expect(homeEl).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');

    userEvent.click(AboutEl);
    expect(history.location.pathname).toBe('/about');

    userEvent.click(homeEl);
    expect(history.location.pathname).toBe('/');
  });

  test(`Teste se a aplicação é redirecionada para a página de About, ${
    +'na URL /about, ao clicar no link About da barra de navegação'}`, () => {
    const { getByText, history } = renderWithRouter(
      <App />,
    );
    const linkText = 'About';
    const linkElement = getByText((cont, el) => linkCb(cont, el, linkText, 'link'));

    expect(linkElement).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');

    fireEvent.click(linkElement);
    expect(history.location.pathname).toBe('/about');
  });

  test('este se a aplicação é redirecionada para a página de Pokémons Favoritados, na URL'
  + '/favorites, ao clicar no link Favorite Pokémons da barra de navegação.', () => {
    const { getByText, history } = renderWithRouter(
      <App />,
    );
    const linkText = 'Favorite Pokémons';
    const linkElement = getByText((cont, el) => linkCb(cont, el, linkText, 'link'));

    expect(linkElement).toBeInTheDocument();
    expect(history.location.pathname).toBe('/');

    fireEvent.click(linkElement);
    expect(history.location.pathname).toBe('/favorites');
  });

  test('Teste se a aplicação é redirecionada para a página'
+ ' Not Found ao entrar em uma URL desconhecida.', () => {
    const { getByText, history } = renderWithRouter(<App />);

    expect(history.location.pathname).toBe('/');

    history.push('/random route');
    const msgElement = getByText(/Page requested not found/i);
    expect(msgElement).toBeInTheDocument();
  });
});
