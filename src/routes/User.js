const { Router } = require('express');
const middlewares = require('../middlewares');
const controllers = require('../controllers');
const Models = require('../../models');

/**
 * @constant
 * @type {import('sequelize').ModelType}
 */
const user = Models.User;

const route = Router();

route.post('/',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword,
  middlewares.isUserRegistered,
  controllers.User);

module.exports = route;