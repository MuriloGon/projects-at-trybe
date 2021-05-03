import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import event from '@testing-library/user-event';

import MovieLibrary from '../components/MovieLibrary';

const movies = [
  {
    title: 'An awesome title',
    subtitle: 'Movie Subtitle 1',
    storyline: 'Movie Storyline 1',
    rating: 4.5,
    imagePath: 'images/movie_1',
    bookmarked: true,
    genre: 'action',
  },
  {
    title: 'Movie Title 2',
    subtitle: 'An incredible subtitle',
    storyline: 'Movie Storyline 2',
    rating: 4.5,
    imagePath: 'images/movie_2',
    bookmarked: false,
    genre: 'comedy',
  },
  {
    title: 'Movie Title 3',
    subtitle: 'Movie Subtitle 3',
    storyline: 'An great storyline',
    rating: 3,
    imagePath: 'images/movie_3',
    bookmarked: false,
    genre: 'thriller',
  },
];

const textTestId = 'text-input';
const checkboxTestId = 'checkbox-input';
const selectTestId = 'select-input';
const movieCardTestId = 'movie-card';
const movieCardTitleId = 'movie-card-title';

describe('15 - Crie um componente chamado `<MovieLibrary />`', () => {
  it('Renderize o componente', () => {
    render(<MovieLibrary movies={ movies } />);
  });
});

describe('16 - Configure o estado inicial do componente `<MovieLibrary />`', () => {
  it('Defina o estado inicial de `searchText` como uma string vazia', () => {
    const { getByTestId } = render(<MovieLibrary movies={ movies } />);
    const searchText = getByTestId(textTestId);
    expect(searchText).toHaveValue('');
  });

  it('Defina o estado inicial de `bookmarkedOnly` como o boleano `falso`', () => {
    const { getByTestId } = render(<MovieLibrary movies={ movies } />);
    const bookmarkedOnly = getByTestId(checkboxTestId);
    expect(bookmarkedOnly).not.toBeChecked();
  });

  it('Defina o estado inicial de `selectedGenre` como uma string vazia', () => {
    const { getByTestId } = render(<MovieLibrary movies={ movies } />);
    const selectInput = getByTestId(selectTestId);
    expect(selectInput).toHaveValue('');
  });

  it('Renderize todos os filmes passados pela prop `movies`', () => {
    const { getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const movieCards = getAllByTestId(movieCardTestId);
    expect(movieCards).toHaveLength(movies.length);
  });
});

describe('17 - Renderize `<SearchBar />` dentro de `<MovieLibrary />`', () => {
  it('Renderize o componente `<SearchBar />`', () => {
    const { getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const searchBar = getAllByTestId('search-bar-form');
    expect(searchBar).toHaveLength(1);
  });

  it('Altere o estado da `<SearchBar />` quando algo for digitado nela', () => {
    const { getByTestId } = render(<MovieLibrary movies={ movies } />);
    const searchText = getByTestId(textTestId);
    event.type(searchText, 'My Search Text');

    expect(searchText).toHaveValue('My Search Text');
  });

  it('Disponibilize a opção de filtrar por favoritos', () => {
    const { getByTestId } = render(<MovieLibrary movies={ movies } />);
    const bookmarkedOnly = getByTestId(checkboxTestId);
    event.click(bookmarkedOnly);
    expect(bookmarkedOnly).toBeChecked();
  });

  it('Disponibilize a opção de filtrar por categorias', () => {
    const { getByTestId } = render(<MovieLibrary movies={ movies } />);
    const selectInput = getByTestId(selectTestId);
    expect(selectInput).toHaveValue('');

    event.selectOptions(selectInput, 'thriller');

    expect(selectInput).toHaveValue('thriller');
  });
});

describe('18 - Renderize `<MovieList />` dentro de `<MovieLibrary />`', () => {
  it('Renderize o componente `<MovieList />`', () => {
    const { getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const movieList = getAllByTestId('movie-list');
    expect(movieList).toHaveLength(1);
  });

  it('Filtre os filmes por título de acordo com o que for digitado na barra de busca', () => {
    const { getByTestId, getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const textInput = getByTestId(textTestId);

    event.type(textInput, 'awesome');

    const movieCard = getAllByTestId(movieCardTestId);
    expect(movieCard).toHaveLength(1);

    const movieCardTitle = getByTestId(movieCardTitleId);
    expect(movieCardTitle).toHaveTextContent(movies[0].title);
  });

  it('Filtre os filmes por subtítulo de acordo com o que for digitado na barra de busca', () => {
    const { getByTestId, getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const textInput = getByTestId(textTestId);

    event.type(textInput, 'incredible');

    const movieCard = getAllByTestId(movieCardTestId);
    expect(movieCard).toHaveLength(1);

    const movieCardTitle = getByTestId(movieCardTitleId);
    expect(movieCardTitle).toHaveTextContent(movies[1].title);
  });

  it('Filtre os filmes por sinopse de acordo com o que for digitado na barra de busca', () => {
    const { getByTestId, getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const textInput = getByTestId(textTestId);

    event.type(textInput, 'great');

    const movieCard = getAllByTestId(movieCardTestId);
    expect(movieCard).toHaveLength(1);

    const movieCardTitle = getByTestId(movieCardTitleId);
    expect(movieCardTitle).toHaveTextContent(movies[2].title);
  });

  it('Renderize a lista de filmes sem filtragens se a barra de buscar estiver vazia', () => {
    const expectedLength = 3;
    const { getByTestId, getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const textInput = getByTestId(textTestId);

    event.type(textInput, '');

    const movieCard = getAllByTestId(movieCardTestId);
    expect(movieCard).toHaveLength(expectedLength);
  });

  it('Filtre os filmes por favoritos quando a `checkbox` relacionada for selecionada', () => {
    const { getByTestId, getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const bookmarkedOnly = getByTestId(checkboxTestId);

    event.click(bookmarkedOnly);

    const movieCard = getAllByTestId(movieCardTestId);
    expect(movieCard).toHaveLength(1);
    const movieCardTitle = getByTestId(movieCardTitleId);
    expect(movieCardTitle).toHaveTextContent(movies[0].title);
  });

  it('Filtre os filmes por categoria quando a `checkbox` relacionada for selecionada', () => {
    const { getByTestId, getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const select = getByTestId(selectTestId);

    event.selectOptions(select, 'comedy');

    const movieCard = getAllByTestId(movieCardTestId);
    expect(movieCard).toHaveLength(1);
    const movieCardTitle = getByTestId(movieCardTitleId);
    expect(movieCardTitle).toHaveTextContent(movies[1].title);
  });
});

describe('19 - Renderize `<AddMovie />` dentro de `<MovieLibrary />`', () => {
  it('Renderize o componente `<AddMovie />`', () => {
    const { getAllByTestId } = render(<MovieLibrary movies={ movies } />);
    const addMovieForm = getAllByTestId('add-movie-form');
    expect(addMovieForm).toHaveLength(1);
  });

  it('Adicione, após preenchimento do formulário e clique no botão de enviar, o novo filme à lista de filmes', () => {
    const { getByTestId, getAllByTestId } = render(<MovieLibrary movies={ movies } />);

    const newMovie = {
      subtitle: 'Harry Potter magical subtitle',
      title: 'Harry Potter VII',
      storyline: 'Harry dies',
      rating: '4.9',
      genre: 'action',
    };

    let movieCards = getAllByTestId(movieCardTestId);

    expect(movieCards).toHaveLength(movies.length);

    const titleInput = getByTestId('title-input');
    const subtitleInput = getByTestId('subtitle-input');
    const imageInput = getByTestId('image-input');
    const storylineInput = getByTestId('storyline-input');
    const ratingInput = getByTestId('rating-input');
    const genreInput = getByTestId('genre-input');
    const sendButton = getByTestId('send-button');

    event.type(titleInput, newMovie.title);
    event.type(subtitleInput, newMovie.subtitle);
    event.type(imageInput, newMovie.imagePath);
    fireEvent.change(storylineInput, { target: { value: newMovie.storyline } });
    event.type(ratingInput, newMovie.rating);
    event.selectOptions(genreInput, newMovie.genre);

    event.click(sendButton);

    movieCards = getAllByTestId(movieCardTestId);

    expect(movieCards).toHaveLength(movies.length + 1);
    const newMovieTitle = getAllByTestId(movieCardTitleId);
    expect(newMovieTitle[movieCards.length - 1]).toHaveTextContent(newMovie.title);
  });
});
