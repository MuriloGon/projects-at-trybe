import React from 'react';
import '@testing-library/jest-dom';
// import * as ReactRedux from 'react-redux';
import { waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import MealsList from '../Components/MealsList';
import { meals } from '../__mocks__/mealsData';

// console.log(meals);

describe('Tela Principal - MealsList', () => {
  test('25 - Testando se é renderizado 12 cards da tela de comidas', async () => {

    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(meals),
    }));

    const { getByTestId } = renderWithRouterAndRedux(
      <MealsList />,
    );

    const expectedLength = 12;
    const mealsCards = getByTestId('meal-card');
    expect(await mealsCards).toHaveLength(expectedLength);
  });
});
