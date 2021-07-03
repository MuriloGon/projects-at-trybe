import React from 'react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Explore from '../../pages/Application/Explore';
import renderWithRouterAndRedux from '../../__tests_helpers__/renderWithRouterAndRedux';

describe('Explore Screen - <ExploreHome /> Component', () => {
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
