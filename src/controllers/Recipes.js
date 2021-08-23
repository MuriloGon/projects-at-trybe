const RecipesService = require('../services/Recipes');

async function postRecipe(req, res) {
  const { id } = req.user;
  const { name, ingredients, preparation } = req.body;
  const { ok, error } = await RecipesService.addNewRecipe(id, name, ingredients, preparation);
  if (error) return res.status(error.status).json(error.data);
  return res.status(ok.status).json(ok.data);
}

async function getRecipes(_req, res) {
  const { ok, error } = await RecipesService.getRecipes();
  if (error) return res.status(error.status).json(error.data);
  return res.status(ok.status).json(ok.data);
}

async function getRecipeById(req, res) {
  const { id } = req.params;
  const { ok, error } = await RecipesService.getRecipeById(id);
  if (error) return res.status(error.status).json(error.data);
  return res.status(ok.status).json(ok.data);
}

async function putUpdateRecipe(req, res) {
  const { id } = req.params;
  const { name, ingredients, preparation } = req.body;

  const { ok, error } = await RecipesService.updateRecipe(id, name, ingredients, preparation);
  if (error) return res.status(error.status).json(error.data);
  return res.status(ok.status).json(ok.data);
}

async function deleteRecipe(req, res) {
  const { id } = req.params;
  
  const { ok, error } = await RecipesService.deleteRecipe(id);
  if (error) return res.status(error.status).json(error.data);
  return res.status(ok.status).json(ok.data);
}

module.exports = {
  postRecipe,
  getRecipes,
  getRecipeById,
  putUpdateRecipe,
  deleteRecipe,
};