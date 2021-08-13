/// <reference path="../utils/types.js" />

const connection = require('./connection');
const { ObjectID } = require('mongodb');

class ProductsModel {
  constructor(MongoDBConnection = connection) {
    this.conn = MongoDBConnection;
    this.collectionName = 'products';
  }

  /** @param {string} name */
  async isUniqueName(name) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const NOTHING = 0;
    const qty = await products.find({ name }).count();
    if (qty === NOTHING) return true;
    return false;
  }

  /**
   * @param {string} name
   * @param {number} quantity
   * @return {Promise<Product>}
   */
  async saveProduct(name, quantity) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    let { insertedId: _id } = await products.insertOne({ name, quantity });
    _id = _id.toString();
    return { _id, name, quantity };
  }

  /**
   * @return {Promise<Product[]>}
   */
  async getProducts() {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const data = await products.find({}).toArray();
    return data;
  }

  /**
   * @param {string} _id - an id for a product document
   * @returns {Promise<null> | Promise<Product>} resolved value
   */
  async getProductById(_id) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const data = await products.findOne({ _id: ObjectID(_id) });
    return data;
  }
};

module.exports = ProductsModel;
