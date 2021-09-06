const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const isUserRegistered = require('./isUserRegistered');
const authorizateEmailUser = require('./authorizateEmailUser');
const validateLogin = require('./validateLogin');
const authUser = require('./authUser');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  isUserRegistered,
  authorizateEmailUser,
  validateLogin,
  authUser,
};