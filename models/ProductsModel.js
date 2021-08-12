const connection = require('./connection');

class ProductsModel {
  constructor(MongoDBConnection = connection){
    this.conn = MongoDBConnection;
  }

  async isUniqueName(name) {
    const db = await connection();
    const products = await db.collection('products');
    const NOTHING = 0;
    const qty = await products.find({name}).count();
    if(qty === NOTHING) return true;
    return false;
  }

  async saveProduct(name, quantity) {
    const db = await connection();
    const products = await db.collection('products');
    const {insertedId: _id} = await products.insertOne({name, quantity});
    return {_id, name, quantity};
  }

  // async getProducts()  {
  //   const db = await connection();
  //   const products = await db.collection('products');
  //   const data = await products.find({}).toArray();
  //   return data;
  // }

};

module.exports = ProductsModel;
