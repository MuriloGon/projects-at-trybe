/// <reference path="../utils/types.js" />

const connection = require('./connection');
const { ObjectId } = require('mongodb');

class ProductsModel {
  constructor(MongoDBConnection = connection) {
    this.conn = MongoDBConnection;
    this.collectionName = 'products';
  }

  /**
   * verify the product's name uniqueness
   * @param {string} name
   * @return {Promise<boolean>} true -> is unique, false -> is not unique
  */
  async isUniqueName(name) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const NOTHING = 0;
    const qty = await products.find({ name }).count();
    if (qty === NOTHING) return true;
    return false;
  }

  /**
   * Save a new product
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
   * Get all products
   * @return {Promise<Product[]>}
   */
  async getProducts() {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const data = await products.find({}).toArray();
    return data;
  }

  /**
   * Get a product by document _id
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

  async updateProductQty(sale, operation) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);

    const { itensSold } = sale;
    const itemsLen = itensSold.length;

    const ZERO = 0;
    const subQty = (currentDbQty, actionQty, productId) => {
      const newQty = currentDbQty - actionQty;
      const allowOperation = (currentDbQty - actionQty) >= ZERO;
      return { allowOperation, productId, newQty };
    };

    const addQty = (currentDbQty, actionQty, productId) => {
      const newQty = currentDbQty + actionQty;
      const allowOperation = true;
      return { allowOperation, productId, newQty };
    };

    const testObj = [];
    for (let i = ZERO; i < itemsLen; i += 1) {
      const soldProd = itensSold[i];

      const product = await this.getProductById(soldProd.productId);
      if(operation === 'add'){
        testObj.push(addQty(product.quantity, soldProd.quantity, soldProd.productId));
      } else {
        testObj.push(subQty(product.quantity, soldProd.quantity, soldProd.productId));
      }
    }

    const cannotUpdate = testObj.some(({ allowOperation }) => allowOperation === false);
    if (cannotUpdate) return null;

    for (let i = ZERO; i < itemsLen; i += 1) {
      const { newQty: quantity, productId } = testObj[i];
      const _id = ObjectId(productId);
      await products.updateOne({ _id }, { $set: { quantity } });
    }

    return true;
  }
};


module.exports = ProductsModel;
