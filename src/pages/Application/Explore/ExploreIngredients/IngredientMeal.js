import React from 'react';
import PropTypes from 'prop-types';
import GenericCardMenu from './GenericCardMenu';

function IngredientMeal({ data, type }) {
  return (
    data.map((datum, index) => (
      <GenericCardMenu
        key={ `card-${index}` }
        name={ datum.strIngredient }
        index={ index }
        type={ type }
      />
    ))
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
