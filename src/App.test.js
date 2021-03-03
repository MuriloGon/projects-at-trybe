import React from 'react';
import ReactDOM from 'react-dom';
import { Router, BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import MutationObserver from 'mutationobserver-shim';
import { render, waitFor, screen, fireEvent, cleanup } from '@testing-library/react'

import data from './services/movieData';
import * as movieAPI from './services/movieAPI';

import App from './App';
import MovieList from './pages/MovieList';
import NewMovie from './pages/NewMovie';

const resetStorage = () => { localStorage.setItem('movies', JSON.stringify(data)) };
resetStorage();

const readMovies = () => JSON.parse(localStorage.getItem('movies'));

const saveMovies = (movies) => localStorage.setItem('movies', JSON.stringify(movies));

jest.mock('./services/movieAPI');

movieAPI.getMovies = jest.fn(() => (
  new Promise((resolve) => {
    const movies = readMovies();
    resolve(movies);
  })
));

movieAPI.getMovie = jest.fn((movieId) => {
  const movie = readMovies().find((mov) => mov.id === parseInt(movieId, 10));

  return new Promise((resolve) => {
    resolve(movie);
  });
});

movieAPI.updateMovie = jest.fn((updatedMovie) => {
  const movies = readMovies().map((movie) => {
    if (movie.id === parseInt(updatedMovie.id, 10)) {
      return { ...movie, ...updatedMovie };
    }
    return movie;
  });
  saveMovies(movies);

  return new Promise((resolve) => {
    resolve('OK');
  });
});

movieAPI.createMovie = jest.fn((movieData) => {
  let movies = readMovies();
  const nextId = movies[movies.length - 1].id + 1;
  const newMovie = { ...movieData, id: nextId };
  movies = [...movies, newMovie];
  saveMovies(movies);

  return new Promise((resolve) => {
    resolve('OK');
  });
});

movieAPI.deleteMovie = jest.fn((movieId) => {
  let movies = readMovies();
  movies = movies.filter((movie) => movie.id !== parseInt(movieId, 10));
  saveMovies(movies);

  return new Promise((resolve) => {
    resolve({ status: 'OK' });
  });
});

const genres = {
  'action': 'Ação',
  'comedy': 'Comédia',
  'thriller': 'Suspense',
  'fantasy': 'Fantasia',
}

const renderPath = (path) => {
  const history = createBrowserHistory()
  history.push(path);
  const { ...resources } = render(
    <Router history={history}>
      <App />
    </Router>
  )
  return { ...resources }
};

describe('1 - Renderize `BrowserRouter` no componente `App` usando rotas', () => {
  test('a rota "/" deve renderizar MovieList', async () => {
    const { unmount, getByTestId } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect.anything(getByTestId('movie-list'));
    unmount();
  })
  test('a rota "/movies/:id" deve renderizar MovieDetails', async () => {
    for (const movie of readMovies()) {
      const { unmount, getByTestId } = renderPath('/movies/' + movie.id);
      await waitFor(() => movieAPI.getMovies());
      expect.anything(getByTestId('movie-details'));
      unmount();
    }
  })
  test('a rota "/movies/new" deve renderizar NewMovie', () => {
    const { unmount, getByTestId } = renderPath('/movies/new');
    expect.anything(getByTestId('new-movie'));
    unmount();
  })
  test('a rota "/movies/:id/edit" deve renderizar EditMovie', async () => {
    for (const movie of readMovies()) {
      const { unmount, getByTestId } = renderPath('/movies/' + movie.id + '/edit');
      await waitFor(() => movieAPI.getMovies());
      expect.anything(getByTestId('edit-movie'));
      unmount();
    }
  })
  test('qualquer rota não declarada deve renderizar NotFound', () => {
    const { unmount, getByTestId } = renderPath('/' + Math.random());
    expect.anything(getByTestId('404-error'));
    unmount();
  })
});

describe('2 - Faça uma requisição para buscar e mostrar a lista de filmes quando `MovieList` for montado', () => {
  test('deverá exibir o texto "Carregando..." enquanto estiver fazendo a requisição', async () => {
    const { container, unmount, getByText } = renderPath('/');
    expect(getByText('Carregando...'));
    await waitFor(() => movieAPI.getMovies())
    unmount();
  })
  test('deverá exibir um MovieCard para cada filme retornado pela API', async () => {
    const { unmount, getAllByTestId } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(getAllByTestId('movie-card').length).toBe(5);
    unmount();
  })
});

describe('3 - Insira um link para a página de detalhes de um filme dentro de `MovieCard`', () => {
  test('deve exibir pelo menos o título e a sinopse de seu respectivo filme', async () => {
    const { unmount, getAllByText } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(screen.getAllByTestId('movie-card').length).toBe(5);
    readMovies().forEach((movie) => {
      expect(getAllByText(movie.title).length).toBeGreaterThanOrEqual(1);
      expect(getAllByText(movie.storyline).length).toBeGreaterThanOrEqual(1);
    })
    unmount();
  })
  test('deve conter um link com o texto "VER DETALHES" que redireciona para a página de detalhes do filme', async () => {
    const { unmount, getAllByText } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    getAllByText('VER DETALHES').forEach((link, index) => {
      expect(link.href).toBe('http://localhost/movies/' + (index + 1));
    })
    unmount();
  })
});

describe('4 - Faça uma requisição para buscar o filme que deverá ser renderizado dentro de `Movie Details`', () => {

  it('deverá exibir o texto "Carregando..." enquanto estiver fazendo a requisição', async () => {
    for (const movie of readMovies()) {
      await cleanup();
      const { getByText } = renderPath('/movies/' + movie.id);
      expect(getByText('Carregando...'));
    }
  });

  it('deverá exibir o título, o subtítulo, a sinopse, a imagem e o gênero do filme', async () => {
    for (const movie of readMovies()) {
      const { container, unmount } = renderPath(`/movies/${movie.id}`);
      await waitFor(() => movieAPI.getMovie(movie.id))
      expect(screen.getAllByText(readMovies()[movie.id - 1].title, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(readMovies()[movie.id - 1].subtitle, { exact: false }).length)
        .toBeGreaterThanOrEqual(1);
      expect(screen.getByText(readMovies()[movie.id - 1].storyline, { exact: false })).toBeTruthy;

      let image = screen.getByAltText('Movie Cover').src.split('/').slice(-2).join('/')
      expect(image).toEqual(readMovies()[movie.id - 1].imagePath);
      expect(screen.getAllByText(readMovies()[movie.id - 1].genre, { exact: false })).toBeTruthy;
      unmount();
    }
  });

  it('deverá conter um botão com o texto "VOLTAR" que redireciona para a página inicial', async () => {
    for (const movie of readMovies()) {
      const { container, unmount, findByText } = renderPath('/movies/' + movie.id);
      await waitFor(() => movieAPI.getMovie(movie.id));
      const backButton = await findByText('VOLTAR')
      expect(backButton.href).toBe('http://localhost/');
      unmount();
    }
  });

  it('deverá conter um botão com o texto "EDITAR" que redireciona para a página de edição de filme', async () => {
    for (const movie of readMovies()) {
      const { container, unmount, findByText } = renderPath('/movies/' + movie.id);
      await waitFor(() => movieAPI.getMovie(movie.id));
      const backButton = await findByText('EDITAR')
      expect(backButton.href).toBe(`http://localhost/movies/${movie.id}/edit`);
      unmount();
    }
  });
});

describe('5 - Realize uma requisição para buscar o filme que será editado em `EditMovie`', () => {

  it('deverá exibir o texto "Carregando..." enquanto estiver fazendo a requisição', async () => {
    for (const movie of readMovies()) {
      await cleanup();
      const { unmount, getByText } = renderPath(`/movies/${movie.id}/edit`);
      expect(getByText('Carregando...'));
    }
  });

  it('deverá conter um formulário preenchido com o título, subtítulo, sinopse, caminho da imagem e gênero do filme selecionado', async () => {
    for (const movie of readMovies()) {
      const { container, unmount, getByText, getAllByText, getByAltText, getByDisplayValue, getAllByDisplayValue } = renderPath(`/movies/${movie.id}/edit`);
      await waitFor(() => movieAPI.getMovie(movie.id - 1))
      expect(getAllByDisplayValue(readMovies()[movie.id - 1].title, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(getAllByDisplayValue(readMovies()[movie.id - 1].subtitle, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(getByDisplayValue(readMovies()[movie.id - 1].storyline, { exact: false })).toBeTruthy;
      const image = readMovies()[movie.id - 1].imagePath;
      expect(getAllByDisplayValue(image, { exact: false })).toBeTruthy;
      expect(getAllByDisplayValue(genres[readMovies()[movie.id - 1].genre], { exact: false }))
    }
  });


  it('Quando clicar no botão de submit, deverá fazer uma requisição para API para atualizar o filme selecionado. Após a conclusão da atualização a pessoa usuária deverá ser redirecionada para a página inicial', async () => {
    for (const movie of readMovies()) {
      await cleanup();
      const { container, getByLabelText, getByRole } = renderPath(`/movies/${movie.id}/edit`)
      await waitFor(() => movieAPI.getMovie(movie.id))
      const titleInput = getByLabelText('Título');
      const subTitleInput = getByLabelText('Subtítulo');
      const imageInput = getByLabelText('Imagem');
      const synopsisInput = getByLabelText('Sinopse');
      const genreInput = getByLabelText('Gênero');
      const evaluationInput = getByLabelText('Avaliação');
      const formButton = getByRole('button');

      fireEvent.change(titleInput, { target: { value: 'test title ' + movie.id } })
      fireEvent.change(subTitleInput, { target: { value: 'test subtitle ' + movie.id } })
      fireEvent.change(imageInput, { target: { value: 'testimage' + movie.id } })
      fireEvent.change(synopsisInput, { target: { value: 'test synopsis ' + movie.id } })
      fireEvent.change(genreInput, { target: { value: 'comedy' } })
      fireEvent.change(evaluationInput, { target: { value: movie.id.toString() } })

      await waitFor(() => fireEvent.click(formButton));

      await waitFor(() => movieAPI.getMovies())
      expect(window.location.pathname).toBe('/');
      expect(screen.getByText(`test title ${movie.id}`));
      expect(screen.getByText(`test synopsis ${movie.id}`));

      fireEvent.click(screen.getAllByText('VER DETALHES')[movie.id - 1]);
      await waitFor(() => movieAPI.getMovie(movie.id));
      expect(screen.getAllByText(readMovies()[movie.id - 1].title, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(readMovies()[movie.id - 1].subtitle, { exact: false }).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(readMovies()[movie.id - 1].storyline, { exact: false })).toBeTruthy;
      const image = screen.getByAltText('Movie Cover', { exact: false });
      expect(image.src).toBe('http://localhost/' + readMovies()[movie.id - 1].imagePath);
      expect(screen.getAllByText(readMovies()[movie.id - 1].genre, { exact: false }))
    }

  });

});

describe('6 - Insira um link na página inicial para `NewMovie` para criar novos cartões', () => {
  it('a página inicial deverá conter um link "ADICIONAR CARTÃO". Esse link deve redirecionar para a página de criação de filmes', async () => {
    const { unmount } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    const addMovie = screen.getByText('ADICIONAR CARTÃO');
    expect(addMovie);
    expect(addMovie.href).toBe('http://localhost/movies/new');
    unmount();
  })
  it('"NewMovie" deverá conter um formulário que faz uma requisição para API para criar um novo filme. Após a criação, a pessoa usuária deverá ser redirecionada para a página inicial', async () => {
    await cleanup();
    renderPath('/movies/new')

    const titleInput = screen.getByLabelText('Título');
    const subTitleInput = screen.getByLabelText('Subtítulo');
    const imageInput = screen.getByLabelText('Imagem');
    const synopsisInput = screen.getByLabelText('Sinopse');
    const genreInput = screen.getByLabelText('Gênero');
    const evaluationInput = screen.getByLabelText('Avaliação');
    const formButton = screen.getByRole('button');

    fireEvent.change(titleInput, { target: { value: 'newTitle' } })
    fireEvent.change(subTitleInput, { target: { value: 'newSubtitle' } })
    fireEvent.change(imageInput, { target: { value: 'newImage' } })
    fireEvent.change(synopsisInput, { target: { value: 'newSynopsis' } })
    fireEvent.change(genreInput, { target: { value: 'thriller' } })
    fireEvent.change(evaluationInput, { target: { value: 5 } })
    fireEvent.click(formButton);

    await waitFor(() => movieAPI.getMovies())
    expect(window.location.pathname).toBe('/');
    await cleanup();
    renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(screen.getByText(`newTitle`));
    expect(screen.getByText(`newSynopsis`));
    expect(screen.getAllByTestId('movie-card').length).toBe(6);

  })
});

describe('7 - Adicione um link para deletar um cartão em `MovieDetails`', () => {
  it('"MovieDetails" deverá conter um botão com o texto "DELETAR"', async () => {
    for (const movie of readMovies()) {
      const { container, unmount, findByText } = renderPath('/movies/' + movie.id);
      await waitFor(() => movieAPI.getMovie(movie.id));
      const deleteButton = await findByText('DELETAR')
      expect(deleteButton.href).toBe('http://localhost/');
      unmount();
    }
  })

  it('o botão "DELETAR" deverá fazer uma requisição para a API para excluir o filme em questão', async () => {
    resetStorage();
    const deletedMovie = readMovies()[2];
    renderPath('/movies/3');
    const deleteButton = await screen.findByText('DELETAR');
    fireEvent.click(deleteButton);
    await waitFor(() => movieAPI.getMovies());
    expect(window.location.pathname).toBe('/');
    await cleanup();
    const { container } = renderPath('/');
    await waitFor(() => movieAPI.getMovies());
    expect(screen.getAllByTestId('movie-card').length).toBe(4);
    expect(screen.queryByText(deletedMovie.title)).toBeNull();
  })
});
