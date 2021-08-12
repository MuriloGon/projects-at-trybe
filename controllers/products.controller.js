const ProductsService = require('../services/products.service');

async function postProduct(req, res) {
  const {name, quantity} = req.body;
  const productsService = new ProductsService();
  const {status, data, err} = await productsService.postProduct(name, quantity);
  if(err) {
    return res.status(status).json({err});
  }
  return res.status(status).json(data);
}

module.exports = {
  postProduct
};
