const sinon = require('sinon')
const ProductsModel = require('../../models/ProductsModel');
const { expect } = require('chai');
const Products = require('../../services/products.service');


afterEach(() => {
  sinon.restore();
})

describe('Requirement 01 - Service - registering a new product', () => {
  it('successfully register a new product', async () => {
    const inputObj = {id: '1994', name: 'murilo', quantity: 50};
    sinon.stub(ProductsModel.prototype, 'isUniqueName').resolves(true);
    sinon.stub(ProductsModel.prototype, 'saveProduct').resolves(inputObj);
    const products = new Products();
    const received = await products.postProduct(inputObj.name, inputObj.quantity);
    const expected = {status: 201, data: inputObj};
    expect(received).to.be.eqls(expected);
  });
  it('must return an error object when the product is already registered', async () => {
    sinon.stub(ProductsModel.prototype, 'isUniqueName').resolves(false);
    const inputObj = {id: '1994', name: 'murilo', quantity: 50};
    const products = new Products();
    const received = await products.postProduct(inputObj.name, inputObj.quantity);
    const expected = {
      status: 422,
      err: {code: 'invalid_data', message: 'Product already exists',
      data: undefined
    }};
    expect(received).to.be.eql(expected);
  });
})
