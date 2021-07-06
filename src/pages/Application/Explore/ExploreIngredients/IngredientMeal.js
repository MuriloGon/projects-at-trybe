import React from 'react';
import PropTypes from 'prop-types';
import { drinkIngredientImg as imgSrc } from '../../../../services/drinksAPI';

const mealCard = (name, index) => (
  <div key={ `${name}-${index}` } data-testid={ `${index}-ingredient-card` }>
    <h2 data-testid={ `${index}-card-name` }>{name}</h2>
    <img data-testid={ `${index}-card-img` } src={ imgSrc(name) } alt={ name } />
  </div>
);

function IngredientMeal({ data }) {
  return (
    data.map((datum, index) => mealCard(datum.strIngredient, index))
  );
}

IngredientMeal.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    idIngredient: PropTypes.string,
    strIngredient: PropTypes.string,
    strDescription: PropTypes.string,
    strType: PropTypes.string,
  })).isRequired,
};

export default IngredientMeal;
