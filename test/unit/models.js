const { MongoClient } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server');
const ProductsModel = require('../../models/ProductsModel');
const { expect } = require('chai');

let db = null;
let mongod = null;

async function connection() {
  const MONGO_DB_URL = mongod.getUri();
  const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
  const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
  db = conn.db('testdb');
  return db;
}

describe('Requirement 01 - Model - registering a new product', async () => {
  before(async () => { mongod = await MongoMemoryServer.create(); });
  after(async () => { await mongod.stop(); });
  it('saves name and quantity on database and returns the document saved', async () => {
    const model = new ProductsModel(connection);
    const mockData = { name: 'murilo', quantity: 100 };
    const output = await model.saveProduct(mockData.name, mockData.quantity);
    expect(output.name).to.be.eql(mockData.name);
    expect(output.quantity).to.be.eql(mockData.quantity);
    expect(output._id.toString()).to.match(/^[0-9a-fA-F]{24}$/);
    expect(Object.keys(output)).to.have.length(3);
  });
  it('verifies if the product name is unique, i.e, the product isn\'t saved on the database. ' +
    'If is unique, it must returns true otherwise false.', async () => {
      const model = new ProductsModel(connection);

      const data1 = { name: 'murilo', quantity: 100 };
      const expected1 = false;
      const received1 = await model.isUniqueName(data1.name);
      expect(expected1).to.be.eql(received1);

      const data2 = { name: 'gonçalves', quantity: 50 };
      const expected2 = true;
      const received2 = await model.isUniqueName(data2.name);
      expect(expected2).to.be.eql(received2);
    });
})

describe('Requirement 02 - Model - accessing products', () => {
  before(async () => { mongod = await MongoMemoryServer.create(); });
  after(async () => { await mongod.stop(); });

  it('access all products', async () => {
    const model = new ProductsModel(connection);
    const mockData = [
      { name: 'name1', quantity: 1 },
      { name: 'name2', quantity: 2 },
      { name: 'name3', quantity: 3 }
    ]
    const db = await connection();
    await db.collection('products').insertMany(mockData);
    const products = await model.getProducts();
    expect(products.length).to.be.eql(3);
    expect(products[0].name).to.be.eql('name1');
    expect(products[0].quantity).to.be.eql(1);
  });

  it('access all product by id', async () => {
    const model = new ProductsModel(connection);
    const mockData = [
      { name: 'name1', quantity: 1 },
      { name: 'name2', quantity: 2 },
      { name: 'name3', quantity: 3 }
    ]
    const db = await connection();
    const {ops: dataInserted} = await db.collection('products').insertMany(mockData);
    const [item] = dataInserted;
    const _id = item._id.toString();

    const product = await model.getProductById(_id);
    expect(product.name).to.be.eql('name1');
    expect(product.quantity).to.be.eql(1);
  })

})