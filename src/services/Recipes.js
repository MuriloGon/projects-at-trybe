const RecipesModel = require('../model/Recipes');

async function addNewRecipe(userId, name, ingredients, preparation) {
  const response = await RecipesModel.registerRecipe(userId, name, ingredients, preparation);
  if (!response) return { status: 500, response: { message: 'unexpected error' } };
  return { status: 201, response: { recipe: response } };
}

async function getRecipes() {
  const response = await RecipesModel.getAllRecipes();
  return { status: 200, response };
}

async function getRecipeById(recipeId) {
  const recipe = await RecipesModel.getRecipeById(recipeId);
  if (!recipe) return { status: 404, response: { message: 'recipe not found' } };
  return { status: 200, response: recipe };
}

module.exports = {
  addNewRecipe,
  getRecipes,
  getRecipeById,
};