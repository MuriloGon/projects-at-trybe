import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsOrDrinks, fetchCategories,
  fetchByCategories } from '../services/apisMaps';
import MealsList from './MealsList';
import DrinksList from './DrinksList';

function MainScreen(props) {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const [btnCategories, setBtnCategories] = useState();
  const { type } = props;
  const doze = 12;
  const cinco = 5;

  const filterByCategories = async () => {
    if (btnCategories === 'Beef'
    || btnCategories === 'Breakfast'
    || btnCategories === 'Chicken'
    || btnCategories === 'Dessert'
    || btnCategories === 'Goat') {
      const dataFilter = await fetchByCategories(type)(doze, btnCategories);
      return console.log(dataFilter);
    }

    if (btnCategories === 'Ordinary Drink'
    || btnCategories === 'Cocktail'
    || btnCategories === 'Milk / Float / Shake'
    || btnCategories === 'Other/Unknown'
    || btnCategories === 'Cocoa'
    ) {
      const dataFilter = await fetchByCategories(type)(doze, btnCategories);
      return console.log(dataFilter);
    }

    return console.log('Retorna tudo');
  };

  useEffect(() => {
    const getDataAPI = async () => {
      const dataAPI = await fetchMealsOrDrinks(type)(doze);
      const categoriesAPI = await fetchCategories(type)(cinco);
      setCategories(categoriesAPI);
      setData(dataAPI);
    };

    getDataAPI();
  }, [type]);

  if (data === undefined) return <h1>Loading ...</h1>;

  filterByCategories();

  return type === 'meals'
    ? (
      <MealsList
        data={ data }
        categories={ categories }
        getCategories={ setBtnCategories }
      />)
    : (
      <DrinksList
        data={ data }
        categories={ categories }
        getCategories={ setBtnCategories }
      />);
}

MainScreen.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default MainScreen;
