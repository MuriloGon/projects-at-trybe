/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DrinkDetails from './DrinkDetails';
import MealDetails from './MealDetails';
import { fetchItemById, fetchMealsOrDrinks } from '../../../../services/apisMaps';

const NUM_RECOMMENDATIONS = 6;
const INITIAL_STATE = {
  recommendation: undefined,
  recipeData: undefined,
};

const inProgressLink = (type, id) => (
  type === 'meals' ? `/comidas/${id}/in-progress` : `/bebidas/${id}/in-progress`);

function RecipeDetails({ type, id }) {
  const [data, setData] = useState(INITIAL_STATE);
  const inProgressRecipes = useSelector((st) => st.inProgressRecipes);
  const inverseType = type === 'meals' ? 'drinks' : 'meals';
  const url = inProgressLink(type, id);

  useEffect(() => {
    (async () => {
      const recipeData = await fetchItemById(type)(id);
      const recommendation = await fetchMealsOrDrinks(inverseType)(NUM_RECOMMENDATIONS);
      setData({ recommendation, recipeData });
    })();
    return () => { setData(INITIAL_STATE); };
  }, [type]);

  if (data.recipeData === null) return <h1>Receita não encontada</h1>;
  if (data.recommendation === undefined
    || data.recipeData === undefined
    || data === undefined
    || (type === 'meals' && data.recipeData.idMeal === undefined)
    || (type === 'drinks' && data.recipeData.idDrink === undefined)) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      {type === 'drinks'
        ? (
          <DrinkDetails
            data={ data }
            inverseType={ inverseType }
          />)
        : (
          <MealDetails
            data={ data }
            inverseType={ inverseType }
          />
        )}

      <Link
        data-testid="start-recipe-btn"
        style={ { position: 'fixed', bottom: 0, left: '50%' } }
        to={ url }
      >
        {inProgressRecipes.length === 0 ? 'Iniciar Receita' : 'Continuar Receita'}
      </Link>
    </>
  );
}

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default RecipeDetails;
