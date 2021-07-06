import React from 'react';
import PropTypes from 'prop-types';
import IngredientMeal from './IngredientMeal';
import IngredientDrink from './IngredientDrink';

function ExploreIngredients({ type }) {
  return type === 'meals' ? <IngredientMeal /> : <IngredientDrink />;
}

ExploreIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ExploreIngredients;
