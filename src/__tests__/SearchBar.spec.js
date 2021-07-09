import React from 'react';
import renderWithRouter from '../__tests_helpers__/renderWithRouter';
import SearchBar from '../Components/SearchBar';

describe('Search Bar component', () => {
  it('Test if Search Bar has an search input', () => {
    const { getByTestId } = renderWithRouter(<SearchBar />);
    const searchInput = getByTestId('search-input');
    expect(searchInput).toBeInTheDocument();
  });

  it('Test if Search Bar has a ingredient search radio button', () => {
    const { getByTestId } = renderWithRouter(<SearchBar />);
    const ingredientSearchBtn = getByTestId('ingredient-search-radio');
    expect(ingredientSearchBtn).toBeInTheDocument();
  });

  it('Test if Search Bar has a name search radio button', () => {
    const { getByTestId } = renderWithRouter(<SearchBar />);
    const nameSearchBtn = getByTestId('name-search-radio');
    expect(nameSearchBtn).toBeInTheDocument();
  });

  it('Test if Search Bar has a first letter search radio button', () => {
    const { getByTestId } = renderWithRouter(<SearchBar />);
    const firstLetterSearchBtn = getByTestId('first-letter-search-radio');
    expect(firstLetterSearchBtn).toBeInTheDocument();
  });

  it('Test if Search Bar has a search button', () => {
    const { getByTestId } = renderWithRouter(<SearchBar />);
    const execSearchBtn = getByTestId('exec-search-btn');
    expect(execSearchBtn).toBeInTheDocument();
  });
});
