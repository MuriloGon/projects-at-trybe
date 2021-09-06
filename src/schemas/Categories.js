const { errObj, validObj } = require('./validationUtils');

function validateName(name) {
  if (name === undefined) return errObj(false, '"name" is required'); 
  return validObj(true);
}

module.exports = {
  validateName,
};