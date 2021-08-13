const connection = require('./connection');
const { ObjectID } = require('mongodb');

class ProductsModel {
  constructor(MongoDBConnection = connection) {
    this.conn = MongoDBConnection;
    this.collectionName = 'products';
  }

  async isUniqueName(name) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const NOTHING = 0;
    const qty = await products.find({ name }).count();
    if (qty === NOTHING) return true;
    return false;
  }

  async saveProduct(name, quantity) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const { insertedId: _id } = await products.insertOne({ name, quantity });
    return { _id, name, quantity };
  }

  async getProducts() {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const data = await products.find({}).toArray();
    return data;
  }

  async getProductById(_id) {
    const db = await this.conn();
    const products = await db.collection(this.collectionName);
    const data = await products.findOne({ _id: ObjectID(_id) });
    return data;
  }
};

module.exports = ProductsModel;
