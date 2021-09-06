const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const route = Router();

route.post('/',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  middlewares.isUserRegistered,
  controllers.User.postUser);

module.exports = route;