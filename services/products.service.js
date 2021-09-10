/// <reference path="../utils/types.js" />

const ProductModel = require('../models/ProductsModel');
const { apiError, error } = require('../utils/Errors');

class Products {
  constructor(Model = ProductModel) {
    this.model = new Model();
  }

  /**
   * Save a product in database
   * @param {string} name
   * @param {number} quantity
   * @returns {Promise<ErrorObj> | Promise<OkObj>}
   */
  async postProduct(name, quantity) {
    const isUniqueName = await this.model.isUniqueName(name);
    if (isUniqueName) {
      const data = await this.model.saveProduct(name, quantity);
      return { status: 201, data };
    } 
      return apiError('Product already exists', error.invalidData);
  }

  /**
   * Get a product looking for and id match
   * @param {string} id
   * @returns {Promise<ErrorObj> | Promise<OkObj>}
   */
  async getProductById(id) {
    let data;
    try { data = await this.model.getProductById(id); } catch (err) {
      return apiError('Wrong id format', error.invalidData);
    }
    if (data === null) return apiError('Wrong id format', error.invalidData);
    return { status: 200, data };
  }

  /**
   * Get all
   * @returns {Promise<OkObj>}
   */
  async getAllProducts() {
    const data = await this.model.getProducts();
    return { status: 200, data };
  }

  /**
   * Update product using by the product ID
   * @param {string} id
   * @param {string} name
   * @param {number} quantity
   * @returns {Promise<ErrorObj> | Promise<OkObj>}
   */
  async updateProductById(id, name, quantity) {
    const servRes = await this.model.updateProductById(id, name, quantity);
    if (!servRes) return apiError('Wrong id format', error.invalidData);
    return { status: 200, data: servRes };
  }

  async deleteProduct(id) {
    const deleteRes = await this.model.deleteProduct(id);
    if (!deleteRes) return apiError('Wrong id format', error.invalidData);
    return { status: 200, data: deleteRes };
  }
}

module.exports = Products;
