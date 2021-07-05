import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act } from '@testing-library/react';
import Explore from '../pages/Application/Explore';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import ExploreOptions from '../pages/Application/Explore/ExplorOptions';

const EXPLORE_SURPRISE_ID = 'explore-surprise';

const randomMeal = {
  meals: [{
    idMeal: '52860',
    strMeal: 'Chocolate Raspberry Brownies',
    strDrinkAlternate: null,
    strCategory: 'Dessert',
    strArea: 'American',
  }],
};

const randomDrink = {
  drinks: [{
    idDrink: '17015',
    strDrink: 'Irish Russian',
    strDrinkAlternate: null,
    strTags: null,
    strVideo: null,
    strCategory: 'Beer',
    strIBA: null,
    strAlcoholic: 'Alcoholic',
    strGlass: 'Highball glass',
  }],
};

describe('Explore Screen - "/explorar/"', () => {
  it('must have two buttons "Explorar Comidas" and "Explorar Bebidas"', () => {
    const { getByTestId } = renderWithRouterAndRedux(<Explore />);
    const foodBtnById = getByTestId('explore-food');
    const drinksBtnId = getByTestId('explore-drinks');
    expect(foodBtnById).toBeInTheDocument();
    expect(drinksBtnId).toBeInTheDocument();
    expect(foodBtnById).toHaveTextContent('Explorar Comidas');
    expect(drinksBtnId).toHaveTextContent('Explorar Bebidas');
  });

  it('The "Explorar Comidas" button must redirect to "/explorar/comidas"', () => {
    const { getByTestId, history } = renderWithRouterAndRedux(<Explore />);
    const foodBtnById = getByTestId('explore-food');
    userEvent.click(foodBtnById);
    const receivedPath = history.location.pathname;
    const expectedPath = '/explorar/comidas';
    expect(receivedPath).not.toBe('/explorar');
    expect(receivedPath).toBe(expectedPath);
  });

  it('The "Explorar Bebidas" button must redirect to "/explorar/bebidas"', () => {
    const { getByTestId, history } = renderWithRouterAndRedux(<Explore />);
    const foodBtnById = getByTestId('explore-drinks');
    userEvent.click(foodBtnById);
    const receivedPath = history.location.pathname;
    const expectedPath = '/explorar/bebidas';
    expect(receivedPath).not.toBe('/explorar');
    expect(receivedPath).toBe(expectedPath);
  });
});

describe('Explore Drinks or Meals Screen', () => {
  it('At "/explorar/comidas" must have 3 buttons: ["Por Ingredientes", "Por Local '
  + 'de Origem", "Me Surpreenda!"]', () => {
    const { queryByTestId,
      getByTestId } = renderWithRouterAndRedux(<ExploreOptions type="meals" />);

    const byIngredientsBtnMeals = getByTestId('explore-by-ingredient');
    const byAreaBtnMeals = queryByTestId('explore-by-area');
    const bySurpriseBtnMeals = getByTestId(EXPLORE_SURPRISE_ID);

    expect(byIngredientsBtnMeals).toBeInTheDocument();
    expect(byIngredientsBtnMeals).toHaveTextContent('Por Ingredientes');
    expect(byAreaBtnMeals).toBeInTheDocument();
    expect(byAreaBtnMeals).toHaveTextContent('Por Local de Origem');
    expect(bySurpriseBtnMeals).toBeInTheDocument();
    expect(bySurpriseBtnMeals).toHaveTextContent('Me Surpreenda!');
  });

  it('At "/explorar/comidas" must have 2 buttons: ["Por Ingredientes", '
  + '"Me Surpreenda!"]', () => {
    const { queryByTestId,
      getByTestId } = renderWithRouterAndRedux(<ExploreOptions type="drinks" />);

    const byIngredientsBtnMeals = getByTestId('explore-by-ingredient');
    const byAreaBtnMeals = queryByTestId('explore-by-area');
    const bySurpriseBtnMeals = getByTestId(EXPLORE_SURPRISE_ID);

    expect(byIngredientsBtnMeals).toBeInTheDocument();
    expect(byIngredientsBtnMeals).toHaveTextContent('Por Ingredientes');
    expect(byAreaBtnMeals).not.toBeInTheDocument();
    expect(bySurpriseBtnMeals).toBeInTheDocument();
    expect(bySurpriseBtnMeals).toHaveTextContent('Me Surpreenda!');
  });

  test('When click on "Por Ingredientes", the app must redirect to "/explorar/bebidas" or'
  + ' "/explorar/comidas/', () => {
    const initialAuthState = { auth: { logged: true } };
    const {
      history,
      getByText,
    } = renderWithRouterAndRedux(<Explore />, initialAuthState);

    const exploreMealsBtn = getByText('Explorar Comidas');
    userEvent.click(exploreMealsBtn);
    expect(history.location.pathname).toBe('/explorar/comidas');

    history.goBack();
    const exploreDrinksBtn = getByText('Explorar Bebidas');
    userEvent.click(exploreDrinksBtn);
    expect(history.location.pathname).toBe('/explorar/bebidas');
  });

  test('When click on "Por Local de Origem", the app must redirect to '
  + '"/explorar/comidas/area"', () => {
    const initialAuthState = { auth: { logged: true } };
    const {
      history,
      getByText,
    } = renderWithRouterAndRedux(<ExploreOptions type="meals" />, initialAuthState);

    const exploreMealsBtn = getByText('Por Local de Origem');
    userEvent.click(exploreMealsBtn);
    expect(history.location.pathname).toBe('/explorar/comidas/area');
  });

  test('At "/explorar/comidas/", "Me surpreenda!" button must redirect '
  + 'to "/comidas/{random-id}"', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(randomMeal),
    }));
    const { findByTestId } = renderWithRouterAndRedux(<ExploreOptions type="meals" />);
    const surpriseBtn = await findByTestId(EXPLORE_SURPRISE_ID);
    await act(async () => { userEvent.click(surpriseBtn); });
    expect(await findByTestId(EXPLORE_SURPRISE_ID))
      .toHaveAttribute('href', `/comidas/${randomMeal.meals[0].idMeal}`);
  });

  test('At "/explorar/bebidas/", "Me surpreenda!" button must redirect '
  + 'to "/bebidas/{random-id}"', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(randomDrink),
    }));
    const { findByTestId } = renderWithRouterAndRedux(<ExploreOptions type="drinks" />);
    const surpriseBtn = await findByTestId(EXPLORE_SURPRISE_ID);
    await act(async () => { userEvent.click(surpriseBtn); });
    expect(await findByTestId(EXPLORE_SURPRISE_ID))
      .toHaveAttribute('href', `/comidas/${randomDrink.drinks[0].idDrink}`);
  });
});
