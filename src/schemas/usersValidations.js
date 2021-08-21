const emailV = require('email-validator');

function validateUserBody({ name, email, password }) {
  if (!name || !email || !password) return false;
  if (!emailV.validate(email)) return false;
  return true;
}

module.exports = {
  validateUserBody,
};