import React from 'react';
import PropTypes from 'prop-types';
import GenericCardMenu from './GenericCardMenu';

function IngredientDrink({ data, type }) {
  return (
    data.map((datum, index) => (
      <GenericCardMenu
        key={ `card-${index}` }
        name={ datum.strIngredient1 }
        index={ index }
        type={ type }
      />
    ))
  );
}

IngredientDrink.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    strIngredient1: PropTypes.string,
  })).isRequired,
};

export default IngredientDrink;
