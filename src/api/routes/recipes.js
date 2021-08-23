const { Router } = require('express');
const RecipesControllers = require('../../controllers/Recipes');
const Middlewares = require('../../middlewares');

const route = Router({ mergeParams: true });

route.post('/',
  Middlewares.userAuthorization,
  Middlewares.validateRecipesData,
  RecipesControllers.postRecipe);

route.get('/', 
  RecipesControllers.getRecipes);

route.get('/:id', 
  RecipesControllers.getRecipeById);

route.put('/:id',
  Middlewares.userAuthorization,
  Middlewares.validateRecipesData,
  Middlewares.canUserModify,
  RecipesControllers.putUpdateRecipe);

route.delete('/:id',
  Middlewares.userAuthorization,
  Middlewares.canUserModify,
  RecipesControllers.deleteRecipe);

module.exports = route;