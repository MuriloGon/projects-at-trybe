const emailVal = require('email-validator');
const { errObj, validObj } = require('./validationUtils');

function validateDisplayName(displayName) { 
  if (displayName === undefined) return errObj(false, '"displayName" is required');
  if (typeof displayName !== 'string') return errObj(false, '"displayName" must be string');
  if (displayName.length < 8) {
      return errObj(false, '"displayName" length must be at least 8 characters long');
  }
  return validObj(true);
}

function validateEmail(email) { 
  if (email === undefined) return errObj(false, '"email" is required');
  if (!emailVal.validate(email)) return errObj(false, '"email" must be a valid email');
  return validObj(true);
}

function validatePassword(password) {
  if (password === undefined) return errObj(false, '"password" is required');
  if (typeof password !== 'string') return errObj(false, '"password" must be string');
  if (password.length !== 6) return errObj(false, '"password" length must be 6 characters long');
  return validObj(true);
}

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};  