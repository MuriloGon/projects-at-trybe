/// <reference path="../utils/types.js" />

const SalesModel = require('../models/SalesModel');
const ProdutsModel = require('../models/ProductsModel');
const { apiError, error } = require('../utils/Errors');

class SalesService {
  constructor(Model = SalesModel, pdModels = ProdutsModel) {
    this.model = new Model();
    this.pdModel = new pdModels();
  }

  /**
   * Handler the register sale
   * @param {Array<SaleProduct>} products - products to bind to a new sale
   * @returns {Promise<OkObj> | Promise<ErrorObj>}
   */
  async registerSale(products) {
    const sale = await this.model.registerSale(products);
    if (!sale) return apiError('Wrong product entry', error.invalidData);

    const updtRes = await this.pdModel.updateProductQty(sale, 'sub');
    if(!updtRes) return apiError(
      'Such amount is not permitted to sell', error.notFoundStockProblem);

    return { status: 200, data: sale };
  }

  /**
   * Get all sales
   * @returns {Promise<OkObj>}
   */
  async getAllSales() {
    const sales = await this.model.getAllSales();
    return { status: 200, data: { sales } };
  }

  /**
   * get sale
   * @param {string} id
   * @returns {Promise<OkObj> | Promise<ErrorObj>}
   */
  async getSaleById(id) {
    const sale = await this.model.getSaleById(id);
    if (!sale) return apiError('Sale not found', error.notFound);

    return { status: 200, data: sale };
  }

  /**
   * Update sale
   * @param {string} id
   * @param {Array<SaleProduct>} itemsSold
   * @returns {Promise<OkObj> | Promise<ErrorObj>}
   */
  async updateSaleItemsById(id, itemsSold) {
    const sale = await this.model.updateSaleItems(id, itemsSold);
    if (!sale) return apiError('Sale not found', error.notFound);
    return { status: 200, data: sale };
  }

  /**
   * Delete a sale and returns api response obj
   * @param {string} id
   * @returns {Promise<OkObj> | Promise<ErrorObj>}
   */
  async deleteSaleById(id) {
    const sale = await this.model.deleteSaleById(id);
    if (!sale) return apiError('Wrong sale ID format', error.invalidData);
    const updtRes = await this.pdModel.updateProductQty(sale, 'add');
    if(!updtRes) return apiError(
      'Such amount is not permitted to sell', error.notFoundStockProblem);

    return { status: 200, data: sale };
  }
}

module.exports = SalesService;
