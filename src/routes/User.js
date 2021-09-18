const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');

const route = Router({ mergeParams: true });

route.post('/',
  middlewares.user.validateDisplayName,
  middlewares.user.validateEmail,
  middlewares.user.validatePassword,
  middlewares.user.isUserRegistered,
  controllers.User.postUser);

route.get('/:id',
  middlewares.auth.authUser,
  controllers.User.getById);

route.get('/',
  middlewares.auth.authUser,
  controllers.User.getAllUsers);

route.delete('/me',
  middlewares.auth.authUser,
  controllers.User.deleteMe);

module.exports = route;