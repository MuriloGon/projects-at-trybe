const sinon = require('sinon')
const ProductsModel = require('../../models/ProductsModel');
const { expect } = require('chai');
const ProductsService = require('../../services/products.service');
const { ObjectId } = require('mongodb');


afterEach(() => {
  sinon.restore();
})

describe('Requirement 01 - Service - registering a new product', () => {
  it('successfully register a new product', async () => {
    const inputObj = { id: '1994', name: 'murilo', quantity: 50 };
    sinon.stub(ProductsModel.prototype, 'isUniqueName').resolves(true);
    sinon.stub(ProductsModel.prototype, 'saveProduct').resolves(inputObj);
    const products = new ProductsService();
    const received = await products.postProduct(inputObj.name, inputObj.quantity);
    const expected = { status: 201, data: inputObj };
    expect(received).to.be.eqls(expected);
  });
  it('must return an error object when the product is already registered', async () => {
    sinon.stub(ProductsModel.prototype, 'isUniqueName').resolves(false);
    const inputObj = { id: '1994', name: 'murilo', quantity: 50 };
    const products = new ProductsService();
    const received = await products.postProduct(inputObj.name, inputObj.quantity);
    const expected = {
      status: 422,
      err: {
        code: 'invalid_data', message: 'Product already exists',
        data: undefined
      }
    };
    expect(received).to.be.eql(expected);
  });
})

describe('Requirement 02 - Service - return products', () => {
  it('return object reposnt {status, data} with all products', async () => {
    const data = [
      { _id: '6116822a9a095071f982d4c2', name: 'murilo1', quantity: 33 },
      { _id: '6116822a9a095071f982d4c3', name: 'murilo2', quantity: 66 },
      { _id: '6116822a9a095071f982d4c4', name: 'murilo3', quantity: 100 },
    ]
    const expected = { status: 200, data };
    sinon.stub(ProductsModel.prototype, 'getProducts').resolves(data);
    const service = new ProductsService();
    const serviceResponse = await service.getAllProducts();
    expect(serviceResponse).to.be.eql(expected);
  })

  it('return object response {status, data} obj, if there\'s a match for _id', async () => {
    const id = '6116822a9a095071f982d4c2';
    const data = {
      _id: '6116822a9a095071f982d4c2',
      name: 'murilo',
      quantity: 100
    }
    const expected = { status: 200, data };
    sinon.stub(ProductsModel.prototype, 'getProductById').resolves(data);
    const service = new ProductsService();
    const serviceResponse = await service.getProductById(id);
    expect(serviceResponse).to.be.eql(expected);
  });

  it('return object response {status, err} obj, if there\'s not a match for _id', async () => {
    const id = '6116822a9a095071f982d4c2';
    sinon.stub(ProductsModel.prototype, 'getProductById').resolves(null);
    const expected = {
      status: 422, err: {
        code: "invalid_data",
        message: "Wrong id format",
        data: undefined
      }
    };
    const service = new ProductsService();
    const serviceResponse = await service.getProductById(id);
    expect(serviceResponse).to.be.eql(expected);
  });

  it('return object response {status, err} obj, if _id is not valid', async () => {
    const id = 'invalidId';
    sinon.stub(ProductsModel.prototype, 'getProductById').throwsException()
    const service = new ProductsService();
    const serviceResponse = await service.getProductById(id);
    const expected = {
      status: 422, err: { code: "invalid_data", message: "Wrong id format", data: undefined }
    };
    expect(serviceResponse).to.be.eql(expected);
  });
})

describe('Requirement 02 - Service - update product', () => {
  it('return the product updated in obj format { status, data }', async () => {
    const mockData = { _id: '61173f34fbefd461ca00c788', name: 'murilo', quantity: 10 };
    const expected = { status: 200, data: mockData };
    sinon.stub(ProductsModel.prototype, 'updateProductById').resolves(mockData);
    const service = new ProductsService();

    const { status, data } = await service.updateProductById(
      mockData._id,
      mockData.name,
      mockData.quantity
    );
    expect(status).to.be.eql(expected.status);
    expect(data).to.be.eql(expected.data);
  });

  it('return the err obj format { status, err } when de id is invalid', async () => {
    const mockData = { _id: '61173f34fbefd461ca00c788', name: 'murilo', quantity: 10 };
    const expected = { status: 422, err: {
      code: 'invalid_data',
      message: 'Wrong id format',
      data: undefined
    } };
    sinon.stub(ProductsModel.prototype, 'updateProductById').resolves(null);
    const service = new ProductsService();

    const { status, data } = await service.updateProductById(
      mockData._id,
      mockData.name,
      mockData.quantity
    );
    expect(status).to.be.eql(expected.status);
    expect(data).to.be.eql(expected.data);
  });
});
