import React from 'react';
import { render } from '@testing-library/react';
import event from '@testing-library/user-event';
import '@testing-library/jest-dom';

import SearchBar from '../components/SearchBar';

let props;
const searchBar = () => (
  render(
    <SearchBar
      searchText={ props.searchText }
      onSearchTextChange={ props.onSearchTextChange }
      bookmarkedOnly={ props.bookmarkedOnly }
      onBookmarkedChange={ props.onBookmarkedChange }
      selectedGenre={ props.selectedGenre }
      onSelectedGenreChange={ props.onSelectedGenreChange }
    />,
  )
);

const beforeEachUnitTest = () => {
  props = {
    searchText: 'My Text',
    onSearchTextChange: jest.fn(),
    bookmarkedOnly: true,
    onBookmarkedChange: jest.fn(),
    selectedGenre: 'action',
    onSelectedGenreChange: jest.fn(),
  };
};

const textTestId = 'text-input';
const checkboxTestId = 'checkbox-input';
const selectTestId = 'select-input';

describe('1 - Crie um componente chamado `<SearchBar />`', () => {
  beforeEach(() => beforeEachUnitTest());

  it('Renderize o componente `<SearchBar />`, recebendo as devidas props', () => {
    searchBar();
  });
});

describe('2 - Renderize um formulário dentro de `<SearchBar />`', () => {
  beforeEach(() => beforeEachUnitTest());

  it('Renderize 1, e apenas 1, form dentro de `SearchBar`', () => {
    const { getAllByTestId } = searchBar();
    const form = getAllByTestId('search-bar-form');
    expect(form).toHaveLength(1);
  });
});

describe('3 - Renderize um input do tipo texto dentro do formulário em `<SearchBar />`', () => {
  beforeEach(() => beforeEachUnitTest());

  it('Renderize 1, e apenas 1, input de texto dentro do forms', () => {
    const { getAllByTestId } = searchBar();
    const textInput = getAllByTestId(textTestId);
    expect(textInput).toHaveLength(1);
  });

  it('Renderize o input de texto associado à label "Inclui o texto"', () => {
    const { getAllByTestId } = searchBar();
    const textInputLabel = getAllByTestId('text-input-label');
    expect(textInputLabel).toHaveLength(1);
    expect(textInputLabel[0]).toHaveTextContent('Inclui o texto');
  });

  it('Renderize o input de texto com o valor passado pela prop `searchText`', () => {
    const { getByTestId } = searchBar();
    const textInput = getByTestId(textTestId);
    expect(textInput).toHaveValue(props.searchText);
  });

  it('Passe a props `onSearchTextChange` para o atributo `onChange` do input', () => {
    const expectedTimes = 6;
    const { getByTestId } = searchBar();
    const textInput = getByTestId(textTestId);
    event.type(textInput, 'change');
    expect(props.onSearchTextChange).toHaveBeenCalledTimes(expectedTimes);
  });
});

describe('4 - Renderize um input do tipo checkbox dentro do formulário em `<SearchBar />`', () => {
  beforeEach(() => beforeEachUnitTest());

  it('Renderize uma checkbox dentro do form', () => {
    const { getAllByTestId } = searchBar();
    const checkboxInput = getAllByTestId(checkboxTestId);
    expect(checkboxInput).toHaveLength(1);
  });

  it('Renderize, associada ao checkbox, a label "Mostrar somente favoritos"', () => {
    const { getAllByTestId } = searchBar();
    const checkboxInputLabel = getAllByTestId('checkbox-input-label');
    expect(checkboxInputLabel).toHaveLength(1);
    expect(checkboxInputLabel[0]).toHaveTextContent('Mostrar somente favoritos');
  });

  it('Passe a prop `bookmarkedOnly` para o atributo `checked` do input', () => {
    const { getByTestId } = searchBar();
    const checkboxInput = getByTestId(checkboxTestId);

    expect(checkboxInput).toBeChecked();
  });

  it('Passe a prop `onBookmarkedChange` para o atributo `onChange` do input', () => {
    const { getByTestId } = searchBar();
    const checkboxInput = getByTestId(checkboxTestId);
    event.click(checkboxInput);
    expect(props.onBookmarkedChange).toHaveBeenCalledTimes(1);
  });
});

describe('5 - Renderize um select dentro do formulário em `<SearchBar />`', () => {
  beforeEach(() => beforeEachUnitTest());

  it('Renderize um select dentro do form', () => {
    const { getAllByTestId } = searchBar();
    const selectInput = getAllByTestId(selectTestId);
    expect(selectInput).toHaveLength(1);
  });

  it('Renderize, associada ao componente, uma label com o texto "Filtrar por gênero"', () => {
    const { getAllByTestId } = searchBar();
    const selectInputLabel = getAllByTestId('select-input-label');
    expect(selectInputLabel).toHaveLength(1);
    expect(selectInputLabel[0]).toHaveTextContent('Filtrar por gênero');
  });

  it('Passe a prop `selectedGenre` como valor do select', () => {
    const { getByTestId } = searchBar();
    const selectInput = getByTestId(selectTestId);

    expect(selectInput).toHaveValue(props.selectedGenre);
  });

  it('Passe a prop `onSelectedGenreChange` para o atributo `onChange` do select', () => {
    const { getByTestId } = searchBar();
    const selectInput = getByTestId(selectTestId);
    event.selectOptions(selectInput, 'comedy');

    expect(props.onSelectedGenreChange).toHaveBeenCalledTimes(1);
  });

  it("Renderize 4 options dentro do select com os textos e valores, respectivamente: Todos e '', Ação e action, Comédia e comedy, Suspense e thriller", () => {
    const expectedLength = 4;
    const genreOptions = [
      { text: 'Todos', value: '' },
      { text: 'Ação', value: 'action' },
      { text: 'Comédia', value: 'comedy' },
      { text: 'Suspense', value: 'thriller' },
    ];
    const { getAllByTestId } = searchBar();
    const selectOptions = getAllByTestId('select-option');

    expect(selectOptions).toHaveLength(expectedLength);
    selectOptions.forEach((option, index) => {
      expect(option).toHaveTextContent(genreOptions[index].text);
      expect(option).toHaveValue(genreOptions[index].value);
    });
  });
});
