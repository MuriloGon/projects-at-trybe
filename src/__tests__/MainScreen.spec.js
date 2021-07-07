import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import MealsList from '../Components/MealsList';
import DrinksList from '../Components/DrinksList';
import { meals } from '../__mocks__/mealsData';
import { drinksAPI } from '../__mocks__/drinksData';

const mockedFetch = (data) => jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(data),
}));

describe('MainScreen Tests', () => {
  describe('Requisito 25', () => {
    test('Testando se é renderizado 12 cards da tela de comidas', async () => {
      global.fetch = mockedFetch(meals);

      renderWithRouterAndRedux(
        <MealsList data={ meals } />,
      );

      const expectedLength = 12;
      const mealsCards = await screen.findAllByTestId(/[0-9]+-card-name/);
      expect(mealsCards).toHaveLength(expectedLength);
    });

    test('Testando se é renderizado 12 cards da tela de bebidas', async () => {
      global.fetch = console.log(mockedFetch(drinksAPI));

      renderWithRouterAndRedux(
        <DrinksList data={ drinksAPI } />,
      );

      const expectedLength = 12;
      const drinksCards = await screen.findAllByTestId('drink-card');
      expect(drinksCards).toHaveLength(expectedLength);
    });
  });

  // describe('Requisito 26', () => {
  //   test('Caso as receitas sejam de comida, deve-se carregar as 12 primeiras receitas',
  //     () => {
  //       renderWithRouterAndRedux(<MealsCard meal={ meals } />);

  //       meals.forEach(() => {
  //         const img = screen.getByRole('img');
  //         const testIdTitle = screen.getByTestId('meal-card-title');

  //         expect(img).toBeInTheDocument();
  //         expect(testIdTitle).toBeInTheDocument();
  //       });
  //     });

  //   test('Caso as receitas sejam de bebida, deve-se carregar as 12 primeiras receitas',
  //     () => {
  //       renderWithRouterAndRedux(<DrinksCard drink={ drinksAPI } />);
  //       const { drinks } = drinksAPI;

  //       drinks.forEach(() => {
  //         const img = screen.getByRole('img');
  //         const testIdTitle = screen.getByTestId('drink-card-title');

  //         expect(img).toBeInTheDocument();
  //         expect(testIdTitle).toBeInTheDocument();
  //       });
  //     });
  // });
  // describe('', () => {});
});
