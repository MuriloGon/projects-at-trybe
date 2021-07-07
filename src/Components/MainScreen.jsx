import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { fetchMealsOrDrinks, fetchCategories } from '../services/apisMaps';
import MealsList from './MealsList';
import DrinksList from './DrinksList';

function MainScreen(props) {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const { type } = props;
  const doze = 12;
  const cinco = 5;

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

  return type === 'meals'
    ? <MealsList data={ data } categories={ categories } />
    : <DrinksList data={ data } categories={ categories } />;
}

MainScreen.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default MainScreen;
