import React from 'react';
import PropTypes from 'prop-types';

function DrinksCard({ drink }) {
  const { strDrinkThumb, strDrink } = drink;

  return (
    <div data-testid="drink-card" className="class-drink-card">
      <img src={ strDrinkThumb } alt="drink" />
      <h6 data-testid="drink-card-title">{ strDrink }</h6>
    </div>
  );
}

DrinksCard.propTypes = {
  drink: PropTypes.shape({
    strDrinkThumb: PropTypes.string,
    strDrink: PropTypes.string,
  }).isRequired,
};

export default DrinksCard;
