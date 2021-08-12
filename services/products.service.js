
const ProductModel = require('../models/ProductsModel');
const {apiError, error} = require('../utils/Errors');

class Products {
  constructor(Model = ProductModel) {
    this.model = new Model();
  }
  async postProduct(name, quantity) {
    const isUniqueName = await this.model.isUniqueName(name);
    if(isUniqueName) {
      const data = await this.model.saveProduct(name, quantity);
      return {status:201, data};
    } else {
      return apiError('Product already exists', error.invalidData);
    }
  }
}

module.exports = Products;
