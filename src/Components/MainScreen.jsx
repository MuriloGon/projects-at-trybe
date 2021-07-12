/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsOrDrinks, fetchCategories,
  fetchByCategories, fetchItemsByIngredient } from '../services/apisMaps';
import MealsList from './MealsList';
import DrinksList from './DrinksList';
import { clearExplore } from '../slices/exploreSlice';
import { clearSearchData } from '../slices/searchbar';

const doze = 12;
const cinco = 5;

const condicionalToggle = ({ btnCategories, toggle, type,
  oldBtn, setOldBtn, setData, setToggle }) => {
  if (toggle === false && oldBtn !== btnCategories) {
    fetchByCategories(type)(doze, btnCategories).then(setData);
    setToggle(true);
    setOldBtn(btnCategories);
  }
  if (toggle === true && oldBtn === btnCategories) {
    fetchMealsOrDrinks(type)(doze).then(setData);
    setToggle(false);
    setOldBtn('');
  }
  if (toggle === true && oldBtn !== btnCategories) {
    fetchByCategories(type)(doze, btnCategories).then(setData);
    setToggle(false);
    setOldBtn('');
  }
};

const condicionalCategories = ({ btnCategories, categoriesMeals,
  categoriesDrinks, type, toggle, oldBtn, setOldBtn, setData, setToggle }) => {
  if (btnCategories === 'All') {
    fetchMealsOrDrinks(type)(doze).then(setData);
  }

  if (categoriesMeals.includes(btnCategories)) {
    condicionalToggle({ btnCategories,
      toggle,
      type,
      oldBtn,
      setOldBtn,
      setData,
      setToggle });
  }

  if (categoriesDrinks.includes(btnCategories)) {
    condicionalToggle({ btnCategories,
      toggle,
      type,
      oldBtn,
      setOldBtn,
      setData,
      setToggle });
  }
};

function MainScreen({ type }) {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const [toggle, setToggle] = useState(false);
  const [oldBtn, setOldBtn] = useState('');

  const explore = useSelector((st) => st.explore);
  const searchbar = useSelector((st) => st.searchbar);
  const dispatch = useDispatch();

  const filterByCategories = (btnCategories) => {
    const categoriesMeals = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];
    const categoriesDrinks = ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake',
      'Other/Unknown', 'Cocoa'];

    condicionalCategories({ btnCategories,
      categoriesMeals,
      categoriesDrinks,
      type,
      toggle,
      oldBtn,
      setOldBtn,
      setData,
      setToggle });
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
  }, [type]);

  useEffect(() => {
    if (searchbar.hasDataToRender) {
      setData(searchbar.searchBarData);
      dispatch(clearSearchData());
    }
  }, [searchbar]);

  if (data === undefined
    || categories === undefined) return <h1>Loading ...</h1>;

  if (data === null) return <h1>Nada Encontrado 🥺</h1>;
  if (data.length === 0) return <h1>Nada Encontrado 🥺</h1>;

  return (type === 'meals'
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
      />)
  );
}

MainScreen.propTypes = {
  type: PropTypes.string,
}.isRequired;

export default MainScreen;
