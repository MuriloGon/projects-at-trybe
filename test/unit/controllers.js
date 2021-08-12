const sinon = require('sinon')
const ProductsController = require('../../controllers/products.controller');
const ProductsService = require('../../services/products.service');
const chai = require('chai');
const { expect } = require('chai');


const successfullResponse = {
  status: 201,
  data: { _id: '13071994', name: 'murilo', quantity: 18 }
};

const unsuccessfullResponse = {
  status: 422,
  err: { code: 'invalid_data', message: 'Product already exists' }
}

const mockResponse = () => {
  const res = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns(res);
  return res;
};

before(() => {
});

afterEach(() => {
  sinon.reset();
})

describe('Requirement 01 - Controller - ', async () => {
  it('returns the registered product and the code 201', async () => {
    sinon.stub(ProductsService.prototype, 'postProduct').resolves(successfullResponse);
    const res = mockResponse();
    const req = { body: { name: 'murilo', quantity: 18 } };
    await ProductsController.postProduct(req, res)
    expect(res.json.args[0][0]).to.be.eqls(successfullResponse.data);
    expect(res.status.args[0][0]).to.be.eqls(201);
  });

  it('returns the registered product and the code 422', async () => {
    sinon.stub(ProductsService.prototype, 'postProduct').resolves(unsuccessfullResponse);
    const res = mockResponse();
    const req = { body: { name: 'murilo', quantity: 18 } };
    await ProductsController.postProduct(req, res)
    const err = unsuccessfullResponse.err;
    expect(res.json.args[0][0]).to.be.eqls({ err });
    expect(res.status.args[0][0]).to.be.eqls(422);
  });
})
