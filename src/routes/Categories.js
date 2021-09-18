const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const route = Router({ mergeParams: true });

route.post('/', 
  middlewares.auth.authUser,
  middlewares.categories.validateCategories,
  controllers.Categories.postCategory);

route.get('/', 
  middlewares.auth.authUser,
  controllers.Categories.getCategories);

module.exports = route;