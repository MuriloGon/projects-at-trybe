import React from 'react';
import PropTypes from 'prop-types';

function MealsCard({ meal }) {
  const { strMealThumb, strMeal } = meal;
  return (
    <div data-testid="meal-card" className="class-meal-card">
      <img src={ strMealThumb } alt="meal" />
      <h2 data-testid="meal-card-title">{ strMeal }</h2>
    </div>
  );
}

MealsCard.propTypes = {
  meal: PropTypes.shape({
    strMealThumb: PropTypes.string,
    strMeal: PropTypes.string,
  }).isRequired,
};

export default MealsCard;
