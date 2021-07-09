import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Video from './Video';
import Recommendations from './Recommendations';
import Header from './Header';
import mapIngredients from '../../../../utils/mapIngredients';

const mapMealsRecommendations = (data) => data
  .map(({ strCategory: subtitle, strMeal: title,
    idMeal: id, strMealThumb: imgUrl }) => ({ title, subtitle, imgUrl, id }));

const mapFavoriteDrinkRecipe = (recipe) => ({
  id: recipe.idDrink,
  type: 'bebida',
  area: '',
  category: recipe.strCategory,
  alcoholicOrNot: recipe.strAlcoholic,
  name: recipe.strDrink,
  image: recipe.strDrinkThumb,
});

function DrinkDetails({ data, inverseType, inProgress }) {
  const { recipeData, recommendation, setAllowFinish } = data;
  const { strDrink, strAlcoholic, strDrinkThumb,
    strInstructions, strVideo, idDrink } = recipeData;

  const ingredients = mapIngredients(recipeData);
  const recommendations = mapMealsRecommendations(recommendation);
  return (
    <div>
      <Header
        title={ strDrink }
        category={ strAlcoholic }
        imgSrc={ strDrinkThumb }
        favoriteData={ mapFavoriteDrinkRecipe(recipeData) }
      />

      <Ingredients
        ingredients={ ingredients }
        id={ idDrink }
        inProgress={ inProgress }
        type="drinks"
        allowFinish={ setAllowFinish }
      />

      <Instructions instructions={ strInstructions } />

      {!inProgress && <Video urlVideo={ strVideo } />}

      {!inProgress
      && <Recommendations
        recommendationsList={ recommendations }
        inverseType={ inverseType }
      />}
    </div>
  );
}

const data = {
  recipeData: PropTypes.shape({
    strDrink: PropTypes.string,
    strCategory: PropTypes.string,
    strDrinkThumb: PropTypes.string,
  }),
};

DrinkDetails.propTypes = {
  data: PropTypes.shape(data).isRequired,
  inverseType: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default DrinkDetails;
