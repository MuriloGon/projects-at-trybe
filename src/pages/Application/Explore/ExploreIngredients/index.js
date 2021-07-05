import React from 'react';
import PropTypes from 'prop-types';

function ExploreIngredients({ type }) {
  return (
    <h1>
      Ingredients:
      {type}
    </h1>
  );
}

ExploreIngredients.propTypes = {
  type: PropTypes.string.isRequired,
};

export default ExploreIngredients;
