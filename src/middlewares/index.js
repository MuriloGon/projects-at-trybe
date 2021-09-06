const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const isUserRegistered = require('./isUserRegistered');

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  isUserRegistered,
};