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

  /**
   * Get all sales registered
   * @returns {Promise<SaleRegister[]>}
   */
  async getAllSales() {
    const db = await this.conn();
    const sales = await db.collection(this.collectionName);

    const pipeline = [{ $addFields: { _id: { $toString: '$_id' } } }];
    const data = await sales.aggregate(pipeline).toArray();
    return data;
  }

  /**
   * Get a sale by id
   * @param {string} id
   * @returns {Promise<SaleRegister>}
   */
  async getSaleById(id) {
    if (!ObjectId.isValid(id)) return null;
    const db = await this.conn();
    const sales = await db.collection(this.collectionName);
    const data = await sales.findOne({ _id: ObjectId(id) });
    if (!data) return null;
    const _id = data._id.toString();
    return { ...data, _id };
  }
}

module.exports = SalesModel;
