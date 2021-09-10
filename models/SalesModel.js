/// <reference path="../utils/types.js" />

const { ObjectId } = require('mongodb');
const connection = require('./connection');

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
   * @returns {Promise<SaleRegister> | Promise<null> }
   */
  async getSaleById(id) {
    if (!ObjectId.isValid(id)) return null;
    const db = await this.conn();
    const sales = await db.collection(this.collectionName);
    const data = await sales.findOne({ _id: ObjectId(id) });
    if (!data) return null;
    const idToken = '_id';
    const strId = data[idToken].toString();
    return { ...data, _id: strId };
  }

  /**
   * Update a specific sale
   * @param {string} saleId - Id sale to be updated
   * @param {Array<SaleProduct>} itensSold - items to replace the previous sale
   * @return {Promise<SaleRegister> | Promise<null>} Updated sale
   */
  async updateSaleItems(saleId, itensSold) {
    const db = await this.conn();
    const sales = await db.collection(this.collectionName);
    const data = await sales.updateOne(
      { _id: ObjectId(saleId) },
      { $set: { itensSold } },
    );
    const { modifiedCount } = data;
    if (!modifiedCount) return null;

    return { _id: saleId, itensSold };
  }

  /**
   * Delete a sale and return the deleted document
   * @param {string} id
   * @returns {Promise<null> | Promise<SaleRegister>}
   */
  async deleteSaleById(id) {
    if (!ObjectId.isValid(id)) return null;
    const db = await this.conn();
    const sales = await db.collection(this.collectionName);

    const data = await this.getSaleById(id);
    if (!data) return null;

    const { deletedCount } = await sales.deleteOne({ _id: ObjectId(id) });
    if (!deletedCount) return null;
    return { ...data, _id: id };
  }
}

module.exports = SalesModel;
