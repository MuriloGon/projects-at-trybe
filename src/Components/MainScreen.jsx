import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsOrDrinks, fetchCategories,
  fetchItemsByIngredient } from '../services/apisMaps';
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (!(Boolean(data) && Boolean(categories))) return <h1>Loading ...</h1>;

  return type === 'meals'
    ? <MealsList data={ data } categories={ categories } />
    : <DrinksList data={ data } categories={ categories } />;
}

MainScreen.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default MainScreen;
