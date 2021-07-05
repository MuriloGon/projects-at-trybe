import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import DrinksList from '../Components/DrinksList';
import { drinksAPI } from '../__mocks__/drinksData';

describe('Tela Principal - MealsList', () => {
  test('25 - Testando se é renderizado 12 cards da tela de bebidas', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(drinksAPI),
    }));

    renderWithRouterAndRedux(
      <DrinksList />,
    );

    const expectedLength = 12;
    const drinksCards = await screen.findAllByTestId('drink-card');
    expect(drinksCards).toHaveLength(expectedLength);
  });
});
