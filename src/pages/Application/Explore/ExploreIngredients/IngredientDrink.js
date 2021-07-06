import React from 'react';
import PropTypes from 'prop-types';
import { drinkIngredientImg as imgSrc } from '../../../../services/drinksAPI';

const drinkCard = (name, index) => (
  <div key={ `${name}-${index}` } data-testid={ `${index}-ingredient-card` }>
    <h2 data-testid={ `${index}-card-name` }>{name}</h2>
    <img data-testid={ `${index}-card-img` } src={ imgSrc(name) } alt={ name } />
  </div>
);

function IngredientDrink({ data }) {
  return (
    data.map((datum, index) => drinkCard(datum.strIngredient1, index))
  );
}

IngredientDrink.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    strIngredient1: PropTypes.string,
  })).isRequired,
};

export default IngredientDrink;
