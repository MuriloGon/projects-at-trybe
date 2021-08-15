const SalesService = require('../services/sales.service');

async function postNewSale(req, res) {
  const products = req.body;
  const salesService = new SalesService();
  const { status, err, data } = await salesService.registerSale(products);
  if (err) return res.status(status).json({ err });
  return res.status(status).json(data);
}

async function getAllSales(_req, res) {
  const salesService = new SalesService();
  const { status, data } = await salesService.getAllSales();
  return res.status(status).json(data);
}

async function getSaleById(req, res) {
  const { id } = req.params;
  const salesService = new SalesService();
  const { status, err, data } = await salesService.getSaleById(id);
  if (err) return res.status(status).json({ err });
  return res.status(status).json(data);
}

async function updateItemsSold(req, res) {
  const { id } = req.params;
  const itemsSold = req.body;
  const salesService = new SalesService();
  const { status, err, data } = await salesService.updateProductById(id, itemsSold);
  if (err) return res.status(status).json({ err });
  return res.status(status).json(data);
}

module.exports = {
  postNewSale,
  getAllSales,
  getSaleById,
  updateItemsSold
};
