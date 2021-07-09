import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsOrDrinks, fetchCategories,
  fetchByCategories, fetchItemsByIngredient } from '../services/apisMaps';
import MealsList from './MealsList';
import DrinksList from './DrinksList';
import { clearExplore } from '../slices/exploreSlice';
// import { condicionalToggle } from '../utils/toggleFunction';

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

function MainScreen({ type }) {
  const [data, setData] = useState();
  const [categories, setCategories] = useState();
  const [toggle, setToggle] = useState(false);
  const [oldBtn, setOldBtn] = useState('');

  const explore = useSelector((st) => st.explore);
  const dispatch = useDispatch();

  const filterByCategories = (btnCategories) => {
    const categoriesMeals = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat'];
    const categoriesDrinks = ['Ordinary Drink', 'Cocktail', 'Milk / Float / Shake',
      'Other/Unknown', 'Cocoa'];

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

  useEffect(() => {
    const { savedIngredient: si, savedArea: sa } = explore;
    const hasExploreName = Boolean(si.name) || Boolean(sa.name);
    const test = () => fetchCategories(type)(cinco).then(setCategories);

    if (hasExploreName) {
      fetchItemsByIngredient(type)(doze, si.name)
        .then((byCategoryData) => {
          setData(byCategoryData);
          dispatch(clearExplore());
        }).then(test);
    } else fetchMealsOrDrinks(type)(doze).then(setData).then(test);

    return () => { setData(); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

  if (!data
    || !categories) return <h1>Loading ...</h1>;

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
