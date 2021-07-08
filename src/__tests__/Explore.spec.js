import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { act, screen } from '@testing-library/react';
import Explore from '../pages/Application/Explore';
import renderWithRouterAndRedux from '../__tests_helpers__/renderWithRouterAndRedux';
import ExploreOptions from '../pages/Application/Explore/ExplorOptions';
import ExploreIngredients from '../pages/Application/Explore/ExploreIngredients';
import { drinksIngredients, mealsIngredients } from '../__mocks__/ingredientsData';
import App from '../App';
import { mealsAreas } from '../__mocks__/mealsData';
import ExploreArea from '../pages/Application/Explore/ExploreArea';

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
    renderWithRouterAndRedux(<Explore />);
    const foodBtnById = screen.getByTestId('explore-food');
    const drinksBtnId = screen.getByTestId('explore-drinks');
    expect(foodBtnById).toBeInTheDocument();
    expect(drinksBtnId).toBeInTheDocument();
    expect(foodBtnById).toHaveTextContent('Explorar Comidas');
    expect(drinksBtnId).toHaveTextContent('Explorar Bebidas');
  });

  it('The "Explorar Comidas" button must redirect to "/explorar/comidas"', () => {
    const { history } = renderWithRouterAndRedux(<Explore />);
    const foodBtnById = screen.getByTestId('explore-food');
    userEvent.click(foodBtnById);
    const receivedPath = history.location.pathname;
    const expectedPath = '/explorar/comidas';
    expect(receivedPath).not.toBe('/explorar');
    expect(receivedPath).toBe(expectedPath);
  });

  it('The "Explorar Bebidas" button must redirect to "/explorar/bebidas"', () => {
    const { history } = renderWithRouterAndRedux(<Explore />);
    const foodBtnById = screen.getByTestId('explore-drinks');
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
    renderWithRouterAndRedux(<ExploreOptions type="meals" />);

    const byIngredientsBtnMeals = screen.getByTestId('explore-by-ingredient');
    const byAreaBtnMeals = screen.queryByTestId('explore-by-area');
    const bySurpriseBtnMeals = screen.getByTestId(EXPLORE_SURPRISE_ID);

    expect(byIngredientsBtnMeals).toBeInTheDocument();
    expect(byIngredientsBtnMeals).toHaveTextContent('Por Ingredientes');
    expect(byAreaBtnMeals).toBeInTheDocument();
    expect(byAreaBtnMeals).toHaveTextContent('Por Local de Origem');
    expect(bySurpriseBtnMeals).toBeInTheDocument();
    expect(bySurpriseBtnMeals).toHaveTextContent('Me Surpreenda!');
  });

  it('At "/explorar/comidas" must have 2 buttons: ["Por Ingredientes", '
  + '"Me Surpreenda!"]', () => {
    renderWithRouterAndRedux(<ExploreOptions type="drinks" />);

    const byIngredientsBtnMeals = screen.getByTestId('explore-by-ingredient');
    const byAreaBtnMeals = screen.queryByTestId('explore-by-area');
    const bySurpriseBtnMeals = screen.getByTestId(EXPLORE_SURPRISE_ID);

    expect(byIngredientsBtnMeals).toBeInTheDocument();
    expect(byIngredientsBtnMeals).toHaveTextContent('Por Ingredientes');
    expect(byAreaBtnMeals).not.toBeInTheDocument();
    expect(bySurpriseBtnMeals).toBeInTheDocument();
    expect(bySurpriseBtnMeals).toHaveTextContent('Me Surpreenda!');
  });

  test('When click on "Por Ingredientes", the app must redirect to "/explorar/bebidas" or'
  + ' "/explorar/comidas/', () => {
    const initialAuthState = { auth: { logged: true } };
    const { history } = renderWithRouterAndRedux(<Explore />, initialAuthState);

    const exploreMealsBtn = screen.getByText('Explorar Comidas');
    userEvent.click(exploreMealsBtn);
    expect(history.location.pathname).toBe('/explorar/comidas');

    history.goBack();
    const exploreDrinksBtn = screen.getByText('Explorar Bebidas');
    userEvent.click(exploreDrinksBtn);
    expect(history.location.pathname).toBe('/explorar/bebidas');
  });

  test('When click on "Por Local de Origem", the app must redirect to '
  + '"/explorar/comidas/area"', () => {
    const initialAuthState = { auth: { logged: true } };
    const { history } = renderWithRouterAndRedux(
      <ExploreOptions type="meals" />, initialAuthState,
    );
    const exploreMealsBtn = screen.getByText('Por Local de Origem');
    userEvent.click(exploreMealsBtn);
    expect(history.location.pathname).toBe('/explorar/comidas/area');
  });

  test('At "/explorar/comidas/", "Me surpreenda!" button must redirect '
  + 'to "/comidas/{random-id}"', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(randomMeal),
    }));
    renderWithRouterAndRedux(<ExploreOptions type="meals" />);
    const surpriseBtn = await screen.findByTestId(EXPLORE_SURPRISE_ID);
    await act(async () => { userEvent.click(surpriseBtn); });
    expect(await screen.findByTestId(EXPLORE_SURPRISE_ID))
      .toHaveAttribute('href', `/comidas/${randomMeal.meals[0].idMeal}`);
  });

  test('At "/explorar/bebidas/", "Me surpreenda!" button must redirect '
  + 'to "/bebidas/{random-id}"', async () => {
    global.fetch = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve(randomDrink),
    }));
    renderWithRouterAndRedux(<ExploreOptions type="drinks" />);
    const surpriseBtn = await screen.findByTestId(EXPLORE_SURPRISE_ID);
    await act(async () => { userEvent.click(surpriseBtn); });
    expect(await screen.findByTestId(EXPLORE_SURPRISE_ID))
      .toHaveAttribute('href', `/bebidas/${randomDrink.drinks[0].idDrink}`);
  });
});

const mockedFetch = (data) => jest.fn(() => Promise.resolve({
  json: () => Promise.resolve(data) }));

describe('Explore by Indredients - "/{bebidas | comidas}/"', () => {
  it('Must have ingredients on screen - Meals', async () => {
    global.fetch = mockedFetch(mealsIngredients);
    renderWithRouterAndRedux(<ExploreIngredients type="meals" />);
    const cards = await screen.findAllByTestId(/[0-9]+-ingredient-card/);
    const imgs = await screen.findAllByTestId(/[0-9]+-card-img/);
    const names = await screen.findAllByTestId(/[0-9]+-card-name/);
    const TWELVE_ITEMS = 12;

    expect(cards).toHaveLength(TWELVE_ITEMS);
    expect(imgs).toHaveLength(TWELVE_ITEMS);
    expect(names).toHaveLength(TWELVE_ITEMS);
  });

  it('Must have ingredients on screen - Drinks', async () => {
    global.fetch = mockedFetch(drinksIngredients);
    renderWithRouterAndRedux(<ExploreIngredients type="drinks" />);
    const cards = await screen.findAllByTestId(/[0-9]+-ingredient-card/);
    const imgs = await screen.findAllByTestId(/[0-9]+-card-img/);
    const names = await screen.findAllByTestId(/[0-9]+-card-name/);
    const TWELVE_ITEMS = 12;
    expect(cards).toHaveLength(TWELVE_ITEMS);
    expect(imgs).toHaveLength(TWELVE_ITEMS);
    expect(names).toHaveLength(TWELVE_ITEMS);
  });

  test('When click on an ingredient item, must redirect'
  + ' to /comidas/ - meals', async () => {
    global.fetch = mockedFetch(mealsIngredients);
    const {
      history, findAllByTestId,
    } = renderWithRouterAndRedux(<App />);
    act(() => {
      history.push('/explorar/comidas/ingredientes');
    });
    const cards = await findAllByTestId(/[0-9]+-ingredient-card/);
    act(() => {
      userEvent.click(cards[0]);
    });
    expect(history.location.pathname).toBe('/comidas/');
  });
});

describe('Explore by area - meals', () => {
  it('Render twelve options on dropdown with meals areas', async () => {
    global.fetch = mockedFetch(mealsAreas);
    renderWithRouterAndRedux(<ExploreArea />);
    const dropdown = await screen.findByTestId('explore-by-area-dropdown');
    const options = await screen.findAllByTestId(/[a-z|A-Z]+-option/);
    expect(dropdown).toBeInTheDocument();
    expect(options).toHaveLength(mealsAreas.meals.length + 1); // +1 from "All" option
  });
  it('Dropdown must show correct melas areas', async () => {
    const areas = ['All', ...mealsAreas.meals.map(({ strArea }) => strArea)];
    renderWithRouterAndRedux(<ExploreArea />);
    const options = await screen.findAllByTestId(/[a-z|A-Z]+-option/);
    const textAreas = options.map((el) => el.innerHTML);
    expect(textAreas).toEqual(areas);
  });
  it('The route /bebidas/area must return not found page with a text "Not Found"',
    async () => {
      const initialAuthState = { auth: { logged: true } };
      const { history } = renderWithRouterAndRedux(<App />, initialAuthState);
      act(() => { history.replace('/explorar/bebidas/area'); });
      const notFoundEl = await screen.findByText('Not Found');
      expect(notFoundEl).toBeInTheDocument();
    });
});
