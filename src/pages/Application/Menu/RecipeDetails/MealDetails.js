import React from 'react';
import PropTypes from 'prop-types';
import Ingredients from './Ingredients';
import Instructions from './Instructions';
import Video from './Video';
import Recommendations from './Recommendations';
import Header from './Header';
import mapIngredients from '../../../../utils/mapIngredients';

const mapDrinksRecommendations = (data) => data
  .map(({ strAlcoholic: subtitle, strDrink: title,
    idDrink: id, strDrinkThumb: imgUrl }) => (
    { title, subtitle, imgUrl, id }
  ));

const mapFavoriteMealRecipe = (recipe) => ({
  id: recipe.idMeal,
  type: 'comida',
  area: recipe.strArea,
  category: recipe.strCategory,
  alcoholicOrNot: '',
  name: recipe.strMeal,
  image: recipe.strMealThumb,
});

function MealDetails({ data, inverseType, inProgress }) {
  const { recipeData, recommendation, setAllowFinish } = data;
  const { strMeal, strCategory, strMealThumb,
    strInstructions, strYoutube, idMeal } = recipeData;

  const ingredients = mapIngredients(recipeData);
  const recommendations = mapDrinksRecommendations(recommendation);
  // console.log({ meals: ingredients });
  return (
    <div>
      <Header
        title={ strMeal }
        category={ strCategory }
        imgSrc={ strMealThumb }
        favoriteData={ mapFavoriteMealRecipe(recipeData) }
      />

      <Ingredients
        ingredients={ ingredients }
        id={ idMeal }
        inProgress={ inProgress }
        type="meals"
        allowFinish={ setAllowFinish }
      />

      <Instructions instructions={ strInstructions } />

      {!inProgress && <Video urlVideo={ strYoutube } />}

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

MealDetails.propTypes = {
  data: PropTypes.shape(data).isRequired,
  inverseType: PropTypes.string.isRequired,
  inProgress: PropTypes.bool.isRequired,
};

export default MealDetails;
