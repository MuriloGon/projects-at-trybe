const emailV = require('email-validator');

function validateUserBody({ name, email, password }) {
  const invalid = { error: { message: 'Invalid entries. Try again.' } };
  if (!name || !email || !password) return invalid;
  if (!emailV.validate(email)) return invalid;
  return {};
}

module.exports = {
  validateUserBody,
};