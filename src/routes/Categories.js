const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const route = Router({ mergeParams: true });

route.post('/', 
  middlewares.authUser,
  middlewares.validateCategoriesPost,
  controllers.Categories.postCategory);

route.get('/', (req, res) => { res.send('get'); });

module.exports = route;