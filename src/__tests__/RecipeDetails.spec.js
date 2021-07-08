import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import { drinksIngredients, mealsIngredients } from '../__mocks__/ingredientsData';
import RecipeDetails from '../pages/Application/Menu/RecipeDetails';

describe('Recipe Details Screen', () => {
  test('Implement elements on project with its datatestids', async () => {
    renderWithRouterAndRedux(<RecipeDetails />);
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
});
