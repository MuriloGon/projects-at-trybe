const { Router } = require('express');
const UsersControllers = require('../../controllers/Users');
const Middlewares = require('../../middlewares');

const route = Router({ mergeParams: true });

route.post('/', 
  Middlewares.validateAuthData,
  UsersControllers.postAuthUser);

module.exports = route;