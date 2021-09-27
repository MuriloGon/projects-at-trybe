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

async function updateRecipe(recipeId, name, ingredients, preparation) {
  const data = await RecipesModel.updateRecipe(recipeId, name, ingredients, preparation);
  if (!data) return errRes(404, { message: 'not found' });
  return okRes(200, data);
}

async function deleteRecipe(recipeId) {
  const deleteResult = await RecipesModel.deleteRecipe(recipeId);
  if (!deleteResult) return errRes(401, { message: 'not deleted' });
  return okRes(204, undefined);
}

async function updateImage(recipeId, imagePath) {
  const updatedRecipe = await RecipesModel.updateRecipeImage(recipeId, imagePath);
  if (!updatedRecipe) return errRes(401, { message: 'not deleted' });
  return okRes(200, updatedRecipe);
}

module.exports = {
  addNewRecipe,
  getRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
  updateImage,
};