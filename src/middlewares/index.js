const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const isUserRegistered = require('./isUserRegistered');
const authUser = require('./authUser');
const validateLogin = require('./validateLogin');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  isUserRegistered,
  authUser,
  validateLogin,
};