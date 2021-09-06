const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const route = Router({ mergeParams: true });

route.post('/', 
  middlewares.authUser,
  middlewares.validateCategoriesPost,
  controllers.Categories.postCategory);

route.get('/', 
  middlewares.authUser,
  controllers.Categories.getCategories);

module.exports = route;