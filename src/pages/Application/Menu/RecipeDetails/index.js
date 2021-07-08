import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Video from './Video';
import Recomendations from './Recomendations';
import Header from './Header';

function RecipeDetails({ type }) {
  return (
    <div>
      <Header />

      <Ingredients />

      <Instructions />

      <Video />

      <Recomendations />

      <button type="button" data-testid="start-recipe-btn">Start recipe</button>
    </div>
  );
}

RecipeDetails.propTypes = {
  type: PropTypes.string.isRequired,
};

export default RecipeDetails;
