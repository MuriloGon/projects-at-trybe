const {error,apiError} = require('../utils/Errors');
const {validateNameQuantity} = require('../schemas/products.schema');

function validatePostProduct(req, res, next) {
  const {name, quantity} = req.body;
  const {message} = validateNameQuantity(name, quantity);
  if(message) {
    const {status, err} = apiError(message, error.invalidData);
    return res.status(status).json({err});
  }
  next();
}

module.exports = {
  validatePostProduct
};
