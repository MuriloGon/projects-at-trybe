const joi = require('@hapi/joi');

function validateNameQuantity(name, quantity) {
  const minChars = 5;
  const minNumber = 1;
  const { error } = joi.object({
    name: joi.string().min(minChars).required(),
    quantity: joi.number().min(minNumber).required(),
  }).validate({ name, quantity });

  if (!error) return {};

  return error.details[0];
}

module.exports = {
  validateNameQuantity,
};
