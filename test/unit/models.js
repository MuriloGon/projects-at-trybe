const {MongoClient} = require('mongodb')
const ProductsModel = require('../../models/ProductsModel');
const { expect } = require('chai');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://localhost:27017/SMTest';
let db = null;

async function connection() {
  const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
  db = conn.db('SMTest');
  return db;
}

describe('Requirement 01 - Model Layer - registering a new product', async () => {
  it('saves name and quantity on database and returns the document saved', async () => {
    const model = new ProductsModel(connection);
    const mockData = {name: 'murilo', quantity: 100};
    const output = await model.saveProduct(mockData.name, mockData.quantity);
    expect(output.name).to.be.eql(mockData.name);
    expect(output.quantity).to.be.eql(mockData.quantity);
    expect(output._id.toString()).to.match(/^[0-9a-fA-F]{24}$/);
    expect(Object.keys(output)).to.have.length(3);
  });
  it('verifies if the product name is unique, i.e, the product isn\'t saved on the database. ' +
    'If is unique, it must returns true otherwise false.' , async () => {
      const model = new ProductsModel(connection);

      const data1 = {name: 'murilo', quantity: 100};
      const expected1 = false;
      const received1 = await model.isUniqueName(data1.name);
      expect(expected1).to.be.eql(received1);

      const data2 = {name: 'gonçalves', quantity: 50};
      const expected2 = true;
      const received2 = await model.isUniqueName(data2.name);
      expect(expected2).to.be.eql(received2);
  });
})
