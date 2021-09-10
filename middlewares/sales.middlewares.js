const { validateRegisterSaleProducts } = require('../schemas/sales.schema');

function validateSaleRegisterArray(req, res, next) {
  const saleProductsArray = req.body;
  const {status, err} = validateRegisterSaleProducts(saleProductsArray);
  if (err) return res.status(status).json({ err });
  return next();
}

module.exports = {
  validateSaleRegisterArray
};
