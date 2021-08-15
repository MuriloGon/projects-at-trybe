const { MongoClient, ObjectId } = require('mongodb')
const { MongoMemoryServer } = require('mongodb-memory-server');
const { expect } = require('chai');
const ProductsModel = require('../../models/ProductsModel');
const SalesModel = require('../../models/SalesModel');
const defaultConn = require('../../models/connection');

let db = null;
let mongod = null;

async function connection() {
  const MONGO_DB_URL = mongod.getUri();
  const OPTIONS = { useNewUrlParser: true, useUnifiedTopology: true };
  const conn = await MongoClient.connect(MONGO_DB_URL, OPTIONS);
  db = conn.db('testdb');
  return db;
}

describe('Main Db - Default connection', () => {
  it('the connect goes correctly', async () => {
    const conn = await defaultConn();
    const receivedDbName = conn.databaseName;
    expect(receivedDbName).to.be.eq('StoreManager');
  });
})

describe('Requirement 01 - Model - registering a new product', () => {
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
    const { ops: dataInserted } = await db.collection('products').insertMany(mockData);
    const [item] = dataInserted;
    const _id = item._id.toString();

    const product = await model.getProductById(_id);
    expect(product.name).to.be.eql('name1');
    expect(product.quantity).to.be.eql(1);
  })

  it('return null if the product doesn\'t exist', async () => {
    const model = new ProductsModel(connection);
    const id = 'abcd1234abcd'
    const product = await model.getProductById(id);
    expect(product).to.be.null;
  });
})

describe('Requirement 03 - Model - update product', () => {
  before(async () => { mongod = await MongoMemoryServer.create(); });
  after(async () => { await mongod.stop(); });

  it('update product (name and quantity) and returns the updated document', async () => {
    const model = new ProductsModel(connection);
    const savedProductData = { name: 'murilo', quantity: 50 }

    const updateMockData = { name: 'updatedName', quantity: 666 };

    const savedProduct = await model.saveProduct(savedProductData.name, savedProductData.quantity);
    const updatedProduct = await model.updateProductById(
      savedProduct._id,
      updateMockData.name,
      updateMockData.quantity
    );

    expect(updatedProduct.name).to.be.eql(updateMockData.name);
    expect(updatedProduct.quantity).to.be.eql(updateMockData.quantity);
    expect(updatedProduct._id).to.be.eql(savedProduct._id);
  })

  it('return null when any document was updated', async () => {
    const model = new ProductsModel(connection);
    const savedProductData = { name: 'murilo', quantity: 50 }

    const updateMockData = { name: 'updatedName', quantity: 666 };

    const savedProduct = await model.saveProduct(savedProductData.name, savedProductData.quantity);
    const updatedProduct = await model.updateProductById(
      666,
      updateMockData.name,
      updateMockData.quantity
    );

    expect(updatedProduct).to.be.null;
  })
})

describe('Requirement 04 - Model - delete product', () => {
  before(async () => { mongod = await MongoMemoryServer.create(); });
  after(async () => { await mongod.stop(); });
  it('delete product by id and return the object deleted', async () => {
    const model = new ProductsModel(connection);
    const savedMockData = { name: 'murilo', quantity: 50 }
    const savedProduct = await model.saveProduct(savedMockData.name, savedMockData.quantity);
    const deletedProduct = await model.deleteProduct(savedProduct['_id']);
    expect(deletedProduct).to.be.eql(savedProduct);
    expect(deletedProduct.name).to.be.eql(savedMockData.name);
    expect(deletedProduct.quantity).to.be.eql(savedMockData.quantity);
  });

  it('returns null if the id is invalid', async () => {
    const model = new ProductsModel(connection);
    const invalidID = 'helloworld';
    const deletedProduct = await model.deleteProduct(invalidID);
    expect(deletedProduct).to.be.null;
  });

  it('returns null if the id not exist', async () => {
    const model = new ProductsModel(connection);
    const validId = '1234abcd1234';
    const deletedProduct = await model.deleteProduct(validId);
    expect(deletedProduct).to.be.null;
  });
});

describe('Requirement 05 - Model - register sales', () => {
  before(async () => { mongod = await MongoMemoryServer.create(); });
  after(async () => { await mongod.stop(); });
  const productsMockData = [{ name: 'data1', quantity: 1 },
  { name: 'data2', quantity: 2 }, { name: 'data3', quantity: 3 }]
  const createMockProducts = async () => {
    const model = new ProductsModel(connection);
    const product1 = await model.saveProduct(productsMockData[0].name, productsMockData[0].quantity);
    const product2 = await model.saveProduct(productsMockData[1].name, productsMockData[1].quantity);
    const product3 = await model.saveProduct(productsMockData[2].name, productsMockData[2].quantity);
    return [product1, product2, product3]
  }
  it('register all sales', async () => {
    const model = new SalesModel(connection);
    const [{ _id: id1 }, { _id: id2 }, { _id: id3 }] = await createMockProducts(model);
    mockProductsToInsertData = [
      { productId: id1, quantity: 1 },
      { productId: id2, quantity: 2 },
      { productId: id3, quantity: 3 },
    ]
    const insertedDoc = await model.registerSale(mockProductsToInsertData);
    expect(insertedDoc['_id']).to.be.string;
    expect(ObjectId.isValid(insertedDoc['_id'])).to.be.true;
    expect(insertedDoc.itensSold).to.be.eql(mockProductsToInsertData);
  });
  it('return null if the product array is empty', async () => {
    const model = new SalesModel(connection);
    const insertedDoc = await model.registerSale([]);
    expect(insertedDoc).to.be.null;
  });
})

describe('Requirement 06 - Model - get all', () => {
  before(async () => { mongod = await MongoMemoryServer.create(); });
  after(async () => { await mongod.stop(); });
  it('get all products sales', async () => {
    const products = [
      { productId: '61190a4eaa2fb60654a6702d', quantity: 1 },
      { productId: '61190a6daa2fb60654a6702e', quantity: 2 },
    ]
    const model = new SalesModel(connection);
    const sale1 = await model.registerSale(products);
    const sale2 = await model.registerSale(products);
    const expected = [sale1, sale2];

    const received = await model.getAllSales();
    expect(received).to.be.eql(expected);
  });

  it('get sale by id', async () => {
    const products = [
      { productId: '61190a4eaa2fb60654a6702d', quantity: 1 },
      { productId: '61190a6daa2fb60654a6702e', quantity: 2 },
    ]
    const model = new SalesModel(connection);
    const sale1 = await model.registerSale(products);
    const sale2 = await model.registerSale(products);

    const received = await model.getSaleById(sale1._id);
    expect(received).to.be.eql(sale1);
    expect(received).to.not.be.eql(sale2);
  });

  it('return null if the id doesn\'t exists', async () => {
    const model = new SalesModel(connection);
    const validId = ObjectId().toString();

    const received1 = await model.getSaleById(validId);
    expect(received1).to.be.null;

    const received2 = await model.getSaleById('invalid');
    expect(received2).to.be.null;
  });
});
