import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act, screen, waitFor } from '@testing-library/react';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import { drinksIngredients, mealsIngredients } from '../__mocks__/ingredientsData';
import RecipeDetails from '../pages/Application/Menu/RecipeDetails';
import { meal1, meals } from '../__mocks__/mealsRawData';
import { drink1 } from '../__mocks__/drinksRawData';
import { drinksAPI } from '../__mocks__/drinksData';

const fetcMockImplementation = (data) => () => Promise.resolve({
  json: () => Promise.resolve(data),
});

describe('Recipe Details Screen', () => {
  test('Implement elements on project with its datatestids', async () => {
    global.fetch = jest.fn()
      .mockImplementationOnce(fetcMockImplementation({ meals: [meal1] }))
      .mockImplementationOnce(fetcMockImplementation(drinksAPI));
    renderWithRouterAndRedux(
      <RecipeDetails type="meals" id={ meal1.idMeal } />,
    );
    const recipePhoto = await screen.findByTestId('recipe-photo');
    const recipeTitle = await screen.findByTestId('recipe-title');
    const shareButton = await screen.findByTestId('share-btn');
    const favoriteButton = await screen.findByTestId('favorite-btn');
    const recipeCategory = await screen.findByTestId('recipe-category');
    const ingredients = await screen.findAllByTestId(/\d+-ingredient-name-and-measure/);
    const intructions = await screen.findByTestId('instructions');
    const video = await screen.findByTestId('video');
    const recomendationCard = await screen.findAllByTestId(/\d+-recomendation-card/);
    const startRecipeButton = await screen.findByTestId('start-recipe-btn');
    [recipePhoto, recipeTitle, shareButton, favoriteButton, recipeCategory, intructions,
      video, startRecipeButton].forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    expect(ingredients.length).toBeGreaterThanOrEqual(1);
    expect(recomendationCard.length).toBeGreaterThanOrEqual(1);
  });
  test('When the details page renders, must be made a api request to the right endpoint',
    async () => {
      global.fetch = jest.fn()
        .mockImplementationOnce(fetcMockImplementation({ meals: [meal1] }))
        .mockImplementationOnce(fetcMockImplementation(drinksAPI));
      renderWithRouterAndRedux(<RecipeDetails type="meals" id="52867" />);

      const endpointExpected = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=52867';
      expect(global.fetch).toBeCalledWith(endpointExpected);
      expect(await screen.findByText(/intruções/i)).toBeInTheDocument();
    });

  test('When the details page renders, must be made a api request to the right endpoint',
    async () => {
      global.fetch = jest.fn()
        .mockImplementationOnce(fetcMockImplementation(
          { drinks: [drink1] },
        ))
        .mockImplementationOnce(fetcMockImplementation());

      renderWithRouterAndRedux(<RecipeDetails type="drinks" id="15006" />);
      const endpointExpected = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=15006';
      expect(global.fetch).toBeCalledWith(endpointExpected);
    });
});
