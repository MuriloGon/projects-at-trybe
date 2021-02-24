import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import event from '@testing-library/user-event';
import AddMovie from '../components/AddMovie';

const initialState = {
  subtitle: '',
  title: '',
  imagePath: '',
  storyline: '',
  rating: 0,
  genre: 'action',
};

const onClick = jest.fn();
let form;
let titleInput;
let titleInputLabel;
let subtitleInput;
let subtitleInputLabel;
let imageInput;
let imageInputLabel;
let storylineInput;
let storylineInputLabel;
let ratingInput;
let ratingInputLabel;
let genreInput;
let genreInputLabel;
let genreOptions;
let sendButton;

const movieHarryPotter = 'Harry Potter I';
const subtitleMagical = 'Magical subtitle';
const inputStoryline = 'The boy who lived.';

beforeEach(() => {
  const { queryAllByTestId, queryByTestId } = render(<AddMovie onClick={ onClick } />);
  form = queryAllByTestId('add-movie-form');
  titleInput = queryByTestId('title-input');
  titleInputLabel = queryByTestId('title-input-label');
  subtitleInput = queryByTestId('subtitle-input');
  subtitleInputLabel = queryByTestId('subtitle-input-label');
  imageInput = queryByTestId('image-input');
  imageInputLabel = queryByTestId('image-input-label');
  storylineInput = queryByTestId('storyline-input');
  storylineInputLabel = queryByTestId('storyline-input-label');
  ratingInput = queryByTestId('rating-input');
  ratingInputLabel = queryByTestId('rating-input-label');
  genreInput = queryByTestId('genre-input');
  genreInputLabel = queryByTestId('genre-input-label');
  genreOptions = queryAllByTestId('genre-option');
  sendButton = queryByTestId('send-button');
});

describe('6 - Crie um componente chamado `<AddMovie />`', () => {
  it('Renderize o componente', () => {
    render(<AddMovie onClick={ () => jest.fn() } />);
  });
});

describe('7 - Renderize um formulário dentro de `<AddMovie />`', () => {
  it('Renderize 1, e apenas 1, form', () => {
    expect(form).toHaveLength(1);
  });
});

describe('8 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o título do novo filme', () => {
  it('Renderize um input de texto para quem usa escrever o titulo do filme', () => {
    expect(titleInput).toBeInTheDocument();
  });

  it('Renderize a label "Título" para o input de titulo', () => {
    expect(titleInputLabel).toBeInTheDocument();
    expect(titleInputLabel).toHaveTextContent('Título');
  });

  it('Defina o estado inicial do titulo como "", ou seja, uma string vazia', () => {
    expect(titleInput).toHaveValue(initialState.title);
  });

  it('Altere o valor do input de título quando algo for digitado nele', () => {
    event.type(titleInput, 'my awesome movie title');

    expect(titleInput).toHaveValue('my awesome movie title');
  });
});

describe('9 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o subtítulo do novo filme', () => {
  it('Renderize um input de texto para quem usa escrever o subtítulo do filme', () => {
    expect(subtitleInput).toBeInTheDocument();
  });

  it('Renderize a label "Subtítulo" para o input de subtitulo', () => {
    expect(subtitleInputLabel).toBeInTheDocument();
    expect(subtitleInputLabel).toHaveTextContent('Subtítulo');
  });

  it('Defina o  estado inicial do subtitulo como "", ou seja, uma string vazia', () => {
    expect(subtitleInput).toHaveValue(initialState.subtitle);
  });

  it('Altere o valor do input de subtitulo quando algo é digitado nele', () => {
    event.type(subtitleInput, 'my awesome movie subtitle');

    expect(subtitleInput).toHaveValue('my awesome movie subtitle');
  });
});

describe('10 - Renderize um input do tipo texto dentro do formulário em `<AddMovie />` para obter o caminho da imagem do novo filme', () => {
  it('Renderize um input de texto para quem usa inserir a url da imagem do filme', () => {
    expect(imageInput).toBeInTheDocument();
  });

  it('Renderize a label "Imagem" para o input de imagem', () => {
    expect(imageInputLabel).toBeInTheDocument();
    expect(imageInputLabel).toHaveTextContent('Imagem');
  });

  it('Defina o estado inicial do input de imagem como "", ou seja, uma string vazia', () => {
    expect(imageInput).toHaveValue(initialState.imagePath);
  });

  it('Altere o valor do input de imagem quando algo é digitado nele', () => {
    event.type(imageInput, 'http://localhost:3000/images/Appleseed_Alpha.jpg');
    expect(imageInput).toHaveValue('http://localhost:3000/images/Appleseed_Alpha.jpg');
  });
});

describe('11 - Renderize uma `textarea` dentro do formulário em `<AddMovie />` para obter a sinopse do novo filme', () => {
  it('Renderize um input de texto para quem usa escrever a sinopse do filme', () => {
    expect(storylineInput).toBeInTheDocument();
  });

  it('Renderize a label "Sinopse" para o input de sinopse', () => {
    expect(storylineInputLabel).toBeInTheDocument();
    expect(storylineInputLabel).toHaveTextContent('Sinopse');
  });

  it('Defina o estado inicial do input de sinopse como "", ou seja, uma string vazia', () => {
    expect(storylineInput).toHaveValue(initialState.storyline);
  });

  it('Altere o valor do input de sinopse quando algo é digitado nele', () => {
    const message = 'In the following movie, everyone dies.';
    fireEvent.change(storylineInput, { target: { value: message } });
    expect(storylineInput).toHaveValue(message);
  });
});

describe('12 - Renderize um `input` do tipo `number` dentro do formulário em `<AddMovie />` para obter a avaliação do novo filme', () => {
  it('Renderize um input de texto para quem usa escrever a avaliação do filme', () => {
    expect(ratingInput).toBeInTheDocument();
  });

  it('Renderize a label "Avaliação" para o input de avaliação', () => {
    expect(ratingInputLabel).toBeInTheDocument();
    expect(ratingInputLabel).toHaveTextContent('Avaliação');
  });

  it('Defina o estado inicial do input de avaliação é 0', () => {
    expect(ratingInput).toHaveValue(initialState.rating);
  });

  it('Altere o valor do input de avaliação quando algo é digitado nele', () => {
    const expectedValue = 1.5;
    event.type(ratingInput, '1.5');

    expect(ratingInput).toHaveValue(expectedValue);
  });
});

describe('13 - Renderize um `select` do formulário em `<AddMovie />` para selecionar o gênero do novo filme', () => {
  const options = [
    { value: 'action', text: 'Ação' },
    { value: 'comedy', text: 'Comédia' },
    { value: 'thriller', text: 'Suspense' },
  ];

  it('Renderize um select com 3 opções de genero de filme', () => {
    expect(genreInput).toBeInTheDocument();
    expect(genreOptions).toHaveLength(options.length);
  });

  it('Será validado se o component renderiza a label "Gênero" para o select de gênero', () => {
    expect(genreInputLabel).toBeInTheDocument();
    expect(genreInputLabel).toHaveTextContent('Gênero');
  });

  it('Será validado se todas as opções no select tem o texto e o valor esperados, que são, respectivamente: Ação e action, Comédia e comedy, Suspense e thriller', () => {
    genreOptions.forEach((option, index) => {
      expect(option).toHaveTextContent(options[index].text);
      expect(option).toHaveValue(options[index].value);
    });
  });

  it('Será validado se o gênero selecionado inicialmente é o "action"', () => {
    expect(genreInput).toHaveValue(initialState.genre);
  });

  it('Altere o valor do gênero quando um gênero diferente é escolhido no select', () => {
    event.selectOptions(genreInput, options[1].value);
    expect(genreInput).toHaveValue(genreOptions[1].value);
  });
});

describe('14 - Renderize um botão do formulário em `<AddMovie />` para fazer uso dos dados do novo filme, contidos no estado de `<AddMovie />`', () => {
  it('Será validado se o texto do botão é "Adicionar filme"', () => {
    expect(sendButton).toHaveTextContent('Adicionar filme');
  });

  it('Será validado se o evento onClick é chamado ao se clicar no botão.', () => {
    event.type(titleInput, movieHarryPotter);
    event.type(subtitleInput, subtitleMagical);
    fireEvent.change(storylineInput, { target: { value: `${inputStoryline}` } });
    event.type(storylineInput, inputStoryline);
    event.type(ratingInput, '3.5');

    event.click(sendButton);

    expect(onClick).toHaveBeenCalled();
  });

  it('Será validado se o estado dos inputs volta ao inicial depois que o botão de adicionar é clicado.', () => {
    const expectedRating = 3.5;
    event.type(titleInput, movieHarryPotter);
    event.type(subtitleInput, subtitleMagical);
    fireEvent.change(storylineInput, { target: { value: `${inputStoryline}` } });
    event.type(ratingInput, '3.5');
    event.selectOptions(genreInput, 'comedy');

    expect(titleInput).toHaveValue(movieHarryPotter);
    expect(subtitleInput).toHaveValue(subtitleMagical);
    expect(storylineInput).toHaveValue(inputStoryline);
    expect(ratingInput).toHaveValue(expectedRating);
    expect(genreInput).toHaveValue('comedy');

    event.click(sendButton);

    expect(titleInput).toHaveValue('');
    expect(subtitleInput).toHaveValue('');
    expect(storylineInput).toHaveValue('');
    expect(ratingInput).toHaveValue(0);
    expect(genreInput).toHaveValue('action');
  });
});
