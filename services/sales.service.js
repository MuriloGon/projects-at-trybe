/// <reference path="../utils/types.js" />

const SalesModel = require('../models/SalesModel');
const { apiError, error } = require('../utils/Errors');

class SalesService {
  constructor(Model = SalesModel) {
    this.model = new Model();
  }

  /**
   * Handler the register sale
   * @param {Array<SaleProduct>} products - products to bind to a new sale
   * @returns {Promise<OkObj> | Promise<ErrorObj>}
   */
  async registerSale(products) {
    const sale = await this.model.registerSale(products);
    if (!sale) return apiError('Wrong product entry', error.invalidData);
    return { status: 200, data: sale };
  }

  async getAllSales() {
    const sales = await this.model.getAllSales();
    return { status: 200, data: { sales } };
  }

  async getSaleById(id) {
    const sale = await this.model.getSaleById(id);
    if (!sale) return apiError('Sale not found', error.notFound);
    return { status: 200, data: sale };
  }
}

module.exports = SalesService;
