const SalesService = require('../services/sales.service');

async function postNewSale(req, res) {
  const products = req.body;
  const salesService = new SalesService();
  const { status, err, data } = await salesService.registerSale(products);
  if (err) return res.status(status).json({ err });
  return res.status(status).json(data);
}

module.exports = {
  postNewSale
};
