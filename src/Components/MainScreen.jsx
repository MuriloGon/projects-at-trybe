import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsOrDrinks, fetchCategories,
  fetchByCategories, fetchItemsByIngredient } from '../services/apisMaps';
import MealsList from './MealsList';
import DrinksList from './DrinksList';
import { clearExplore } from '../slices/exploreSlice';

const doze = 12;
const cinco = 5;
function MainScreen({ type }) {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();

  const explore = useSelector((st) => st.explore);
  const dispatch = useDispatch();

  const filterByCategories = (btnCategories) => {
    const categoriesMeals = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];
    const categoriesDrinks = ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake',
      'Other/Unknown', 'Cocoa'];

    if (btnCategories === 'All') {
      fetchMealsOrDrinks(type)(doze)
        .then(setData);
    }

    if (categoriesMeals.includes(btnCategories)) {
      fetchByCategories(type)(doze, btnCategories).then(setData);
    }

    if (categoriesDrinks.includes(btnCategories)) {
      fetchByCategories(type)(doze, btnCategories).then(setData);
    }
  };

  useEffect(() => {
    const { savedIngredient: si, savedArea: sa } = explore;
    const hasExploreName = Boolean(si.name) || Boolean(sa.name);
    if (hasExploreName) {
      fetchItemsByIngredient(type)(doze, si.name)
        .then((byCategoryData) => {
          setData(byCategoryData);
          dispatch(clearExplore());
        });
    } else fetchMealsOrDrinks(type)(doze).then(setData);
    fetchCategories(type)(cinco).then(setCategories);

    return () => { setData(); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (data === undefined
    || categories === undefined) return <h1>Loading ...</h1>;

  if (data.length === 0) return <h1>Nada Encontrado 🥺</h1>;

  return (
    <div>
      {type === 'meals'
        ? (
          <MealsList
            data={ data }
            categories={ categories }
            getCategories={ filterByCategories }
          />)
        : (
          <DrinksList
            data={ data }
            categories={ categories }
            getCategories={ filterByCategories }
          />)}
    </div>
  );
}

MainScreen.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default MainScreen;
