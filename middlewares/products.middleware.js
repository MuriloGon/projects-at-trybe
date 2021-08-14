const { error, apiError } = require('../utils/Errors');
const { validateNameQuantity } = require('../schemas/products.schema');
const { ObjectId } = require('mongodb');

function validatePostProduct(req, res, next) {
  const { name, quantity } = req.body;
  const { message } = validateNameQuantity(name, quantity);
  if (message) {
    const { status, err } = apiError(message, error.invalidData);
    return res.status(status).json({ err });
  }
  next();
}

function validateGetProductParams(req, res, next) {
  const { id } = req.params;
  const validateId = ObjectId.isValid(id);
  if (!validateId) {
    const { status, err } = apiError('Wrong id format', error.invalidData);
    return res.status(status).json({ err });
  }
  next();
}

module.exports = {
  validatePostProduct,
  validateGetProductParams
};
