const sinon = require('sinon')
const ProductsController = require('../../controllers/productsController');
const ProductsService = require('../../services/products.service');
const { expect } = require('chai');
const { mock } = require('sinon');

const mockResponse = () => {
  const res = {};
  res.status = sinon.stub().returns(res);
  res.json = sinon.stub().returns(res);
  return res;
};

afterEach(() => { sinon.restore(); })

describe('Requirement 01 - Controller - Post product', async () => {
  const successfullResponse = {
    status: 201, data: { _id: '13071994', name: 'murilo', quantity: 18 }
  };
  const unsuccessfullResponse = {
    status: 422,
    err: { code: 'invalid_data', message: 'Product already exists' }
  }
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


describe('Requirement 02 - Controller - get all products / get by id', async () => {
  const mockedData = [
    { _id: 1, name: 'name1', quantity: 1 }, { _id: 2, name: 'name2', quantity: 2 },
    { _id: 3, name: 'name3', quantity: 3 }, { _id: 4, name: 'name4', quantity: 4 }
  ];
  const succAllProdutcs = { status: 200, data: mockedData };
  const succProductById = { status: 200, data: mockedData[0] };
  const unsuccProductById = {
    status: 422,
    err: { code: 'invalid_data', message: 'Wrong id format' }
  };

  it('returns the all the products', async () => {
    sinon.stub(ProductsService.prototype, 'getAllProducts').resolves(succAllProdutcs);
    const res = mockResponse();
    const req = { params: { id: '123412341234' } };
    await ProductsController.getAllProducts(req, res)
    expect(res.json.args[0][0].products).to.have.length(4);
    expect(mockedData).to.be.eqls(succAllProdutcs.data);
    expect(res.status.args[0][0]).to.be.eqls(200);
  });

  it('returns a product by id', async () => {
    sinon.stub(ProductsService.prototype, 'getProductById').resolves(succProductById);
    const res = mockResponse();
    const req = { params: { id: 'wrongFormat' } };
    await ProductsController.getProductById(req, res);
    expect(res.json.args[0][0]).to.be.eqls(succProductById.data);
    expect(res.status.args[0][0]).to.be.eqls(200);
  });

  it('returns error msg when the id is invalid', async () => {
    sinon.stub(ProductsService.prototype, 'getProductById').resolves(unsuccProductById);
    const res = mockResponse();
    const req = { params: { id: '123412341234' } };
    await ProductsController.getProductById(req, res)
    const { err } = unsuccProductById;
    expect({ err: unsuccProductById.err }).to.be.eqls({ err });
    expect(res.status.args[0][0]).to.be.eqls(422);
  });
})
