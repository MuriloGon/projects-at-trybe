/// <reference path="../utils/types.js" />

const connection = require('./connection');
const { ObjectId } = require('mongodb');

class SalesModel {
  constructor(MongoDBConnection = connection) {
    this.conn = MongoDBConnection;
    this.collectionName = 'sales';
  }

  /**
   * Register a sale for one or more product
   * @param {Array<{productId: string, quantity: number}>} products
   * @returns {Promise<SaleRegister> | Promise<null>}
   */
  async registerSale(products) {
    if (!products.length) return null;
    const db = await this.conn();
    const sales = await db.collection(this.collectionName);
    const { insertedId } = await sales.insertOne({ itensSold: products });
    return { _id: insertedId.toString(), itensSold: products };
  }
}

module.exports = SalesModel;
