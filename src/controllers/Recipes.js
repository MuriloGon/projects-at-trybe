const RecipesService = require('../services/Recipes');

async function postRecipe(req, res) {
  const { id } = req.user;
  const { name, ingredients, preparation } = req.body;
  const { status, response } = await RecipesService
    .addNewRecipe(id, name, ingredients, preparation);
  return res.status(status).json(response);
}

async function getRecipes(_req, res) {
  const { status, response } = await RecipesService.getRecipes();
  return res.status(status).json(response);
}

module.exports = {
  postRecipe,
  getRecipes,
};