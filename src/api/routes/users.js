const { Router } = require('express');
const UsersControllers = require('../../controllers/Users');
const Middlewares = require('../../middlewares');

const route = Router({ mergeParams: true });

route.post('/',
  Middlewares.validateUserData,
  UsersControllers.postUser);

route.post('/admin',
  Middlewares.validateUserData,
  Middlewares.userAuthorization,
  Middlewares.adminOnly,
  UsersControllers.postAdminUser);

module.exports = route;