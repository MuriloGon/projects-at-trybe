const RecipesModel = require('../model/Recipes');

async function addNewRecipe(userId, name, ingredients, preparation) {
  const response = await RecipesModel.registerRecipe(userId, name, ingredients, preparation);
  if (!response) return { status: 500, response: { message: 'unexpected error' } };
  return { status: 201, response: { recipe: response } };
}

module.exports = {
  addNewRecipe,
};