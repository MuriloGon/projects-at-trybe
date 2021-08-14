/// <reference path="../utils/types.js" />

const connection = require('./connection');
const { ObjectId } = require('mongodb');

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
    const data = await products.findOne({ _id: ObjectId(_id) });
    return data;
  }

  /**
   * update product by its id
   * @param {string} _id - mongodb_id (string 24hex characters)
   * @param {string} name - new name
   * @param {number} quantity - new quanqity
   * @returns {Promise<Product> | Promise<null>} may return null or the product updated
   */
  async updateProductById(_id, name, quantity) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const updateOperation = { $set: { name, quantity } };
    const { modifiedCount } = await products.updateOne(
      { _id: ObjectId(_id) }, updateOperation
    );

    if (!modifiedCount) return null;

    return { _id, name, quantity };
  }

  /**
   * Delete a product by the product id
   * @param {string} id - Product id
   * @return {Promise<Product> | Promise<null>}
   */
  async deleteProduct(id) {
    if (!ObjectId.isValid(id)) return null;
    const productById = await this.getProductById(id);
    if (!productById) return null;

    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const { deletedCount } = await products.deleteOne({ _id: ObjectId(id) });
    if (!deletedCount) return null;
    return { ...productById, _id: id };
  }
};

module.exports = ProductsModel;
