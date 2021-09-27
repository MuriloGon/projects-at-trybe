const RecipesService = require('../services/Recipes');

async function canUserModifyRecipe(req, res, next) {
  const { user } = req;
  const { id } = req.params;
  const { ok, error } = await RecipesService.getRecipeById(id);
  if (error) return res.status(error.status).json(error.data);

  const recipe = ok.data;
  if (recipe.userId !== user.id && user.role !== 'admin') {
    const message = 'You must to be the recipe owner or an admin to modify this resource';
    return res.status(403).json({ message });
  }

  return next();
}

module.exports = canUserModifyRecipe;