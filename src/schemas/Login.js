const { errObj, validObj } = require('./validationUtils');

function validateEmail(email) {
  if (email === undefined) return errObj(false, '"email" is required');
  if (email === '') return errObj(false, '"email" is not allowed to be empty');
  return validObj(true);
}

function validatePassword(password) {
  if (password === undefined) return errObj(false, '"password" is required');
  if (password === '') return errObj(false, '"password" is not allowed to be empty');
  return validObj(true);
}

module.exports = {
  validateEmail,
  validatePassword,
};