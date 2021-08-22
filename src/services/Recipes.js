const RecipesModel = require('../model/Recipes');
const { okRes, errRes } = require('../utils/apiResponse');

async function addNewRecipe(userId, name, ingredients, preparation) {
  const response = await RecipesModel.registerRecipe(userId, name, ingredients, preparation);
  if (!response) return errRes(500, { message: 'unexpected error' });
  
  return okRes(201, { recipe: response });
}

async function getRecipes() {
  const response = await RecipesModel.getAllRecipes();
  return okRes(200, response);
}

async function getRecipeById(recipeId) {
  const recipe = await RecipesModel.getRecipeById(recipeId);
  if (!recipe) return errRes(404, { message: 'recipe not found' });
  return okRes(200, recipe);
}

module.exports = {
  addNewRecipe,
  getRecipes,
  getRecipeById,
};