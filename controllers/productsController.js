const ProductsService = require('../services/products.service');

async function postProduct(req, res) {
  const { name, quantity } = req.body;
  const productsService = new ProductsService();
  const { status, data, err } = await productsService.postProduct(name, quantity);
  if (err) {
    return res.status(status).json({ err });
  }
  return res.status(status).json(data);
}

async function getAllProducts(_req, res) {
  const productsService = new ProductsService();
  const { status, data: products } = await productsService.getAllProducts();
  return res.status(status).json({ products });
}

async function getProductById(req, res) {
  const { id } = req.params;
  const productsService = new ProductsService();
  const { status, data, err } = await productsService.getProductById(id);
  if (err) {
    return res.status(status).json({ err });
  }
  return res.status(status).json(data);
}


module.exports = {
  postProduct,
  getAllProducts,
  getProductById
};
