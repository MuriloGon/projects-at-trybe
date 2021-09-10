const { ObjectId } = require('mongodb');
const joi = require('@hapi/joi');
const { apiError, error } = require('../utils/Errors');

const customIdMongoValidation = (value) => {
  if (ObjectId.isValid(value)) return value;
  throw new Error('Wrong mongo id format');
};

function validateRegisterSaleProducts(array) {
  const schema = joi.array().items(joi.object({
    productId: joi.custom(customIdMongoValidation).required(),
    quantity: joi.number().min(1).required(),
  }).required());

  const { error: err } = schema.validate(array);
  if (err) return apiError('Wrong product ID or invalid quantity', error.invalidData);
  return {};
}

module.exports = {
  validateRegisterSaleProducts,
};
