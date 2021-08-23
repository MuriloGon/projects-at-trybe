const sinon = require('sinon')
const { expect } = require('chai');

const ProductsController = require('../../controllers/productsController');
const ProductsService = require('../../services/products.service');

const SalesController = require('../../controllers/salesController');
const SalesService = require('../../services/sales.service');

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

describe('Requirement 03 - Controller - get all products / get by id', async () => {
  const mockedData = {
    _id: 'validId',
    name: 'newValue',
    quantity: 999
  };
  const successfullUpdate = { status: 200, data: mockedData };
  const unsuccUpdate = {
    status: 422,
    err: { code: 'invalid_data', message: 'Wrong id format' }
  };

  it('updates product by id status 200 and returns de product updated', async () => {
    sinon.stub(ProductsService.prototype, 'updateProductById').resolves(successfullUpdate);
    const res = mockResponse();
    const req = { params: { id: mockedData._id }, body: { ...mockedData } };
    await ProductsController.putProduct(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 200);
    sinon.assert.calledOnceWithExactly(res.json, successfullUpdate.data);
  });

  it('must not update and return status 422 and return error obj', async () => {
    sinon.stub(ProductsService.prototype, 'updateProductById').resolves(unsuccUpdate);
    const res = mockResponse();
    const req = { params: { id: 'invalidId' }, body: { ...mockedData } };
    const expectedErrObj = { err: unsuccUpdate.err };

    await ProductsController.putProduct(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 422);
    sinon.assert.calledOnceWithExactly(res.json, expectedErrObj);
  });
});

describe('Requirement 04 - Controller - delete product by id', async () => {
  const mockedData = {
    _id: 'validId',
    name: 'deletedValue',
    quantity: 333
  };
  const successfullDelete = { status: 200, data: mockedData };
  const unsuccDelete = {
    status: 422,
    err: { code: 'invalid_data', message: 'Wrong id format' }
  };

  it('must return status 200 and the deleted document', async () => {
    sinon.stub(ProductsService.prototype, 'deleteProduct').resolves(successfullDelete);
    const res = mockResponse();
    const req = { params: { id: mockedData._id } };
    await ProductsController.deleteProduct(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 200);
    sinon.assert.calledOnceWithExactly(res.json, successfullDelete.data);
  });

  it('must return status 422 and the ErrorObj when cannot delete', async () => {
    sinon.stub(ProductsService.prototype, 'deleteProduct').resolves(unsuccDelete);
    const res = mockResponse();
    const req = { params: { id: mockedData._id } };
    await ProductsController.deleteProduct(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 422);
    const err = unsuccDelete.err;
    sinon.assert.calledOnceWithExactly(res.json, { err });
  });
});


describe('Requirement 05 - Controller - post new sale', async () => {
  const mockedData = [
    { productId: 'id1', quantity: 10 },
    { productId: 'id2', quantity: 20 },
  ]
  const succssPostSale = {
    status: 200, data: { _id: 'validId', itensSold: mockedData }
  };
  it('must return status 200 and the deleted document', async () => {
    sinon.stub(SalesService.prototype, 'registerSale').resolves(succssPostSale);
    const res = mockResponse();
    const req = { body: mockedData };
    await SalesController.postNewSale(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 200);
    sinon.assert.calledOnceWithExactly(res.json, succssPostSale.data);
  });
});


describe('Requirement 05 - Controller - post new sale', async () => {
  const mockedData = [
    { productId: 'id1', quantity: 10 },
    { productId: 'id2', quantity: 20 },
  ]
  const succssPostSale = {
    status: 200, data: { _id: 'validId', itensSold: mockedData }
  };
  it('must return status 200 and the deleted document', async () => {
    sinon.stub(SalesService.prototype, 'registerSale').resolves(succssPostSale);
    const res = mockResponse();
    const req = { body: mockedData };
    await SalesController.postNewSale(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 200);
    sinon.assert.calledOnceWithExactly(res.json, succssPostSale.data);
  });
});


describe('Requirement 06 - Controller - GET /sales and GET /sales/:id', async () => {
  const mockedData = [
    { productId: 'id1', quantity: 10 },
    { productId: 'id2', quantity: 20 },
  ]
  const sale = { _id: 'validId1', itensSold: mockedData };
  const sales = [
    { _id: 'validId1', itensSold: mockedData }, { _id: 'validId2', itensSold: mockedData }
  ]
  const succGetAll = { status: 200, data: { sales } };
  const succGetById = { status: 200, data: sale }
  const failGetById = {
    status: 404, err: {
      code: 'not_found',
      message: 'Sale not found'
    }
  }
  it('must return status 200 and all sales', async () => {
    sinon.stub(SalesService.prototype, 'getAllSales').resolves(succGetAll);
    const res = mockResponse();
    const req = {};
    await SalesController.getAllSales(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 200);
    sinon.assert.calledOnceWithExactly(res.json, succGetAll.data);
  });

  it('must return status 200 and the sale by id', async () => {
    sinon.stub(SalesService.prototype, 'getSaleById').resolves(succGetById);
    const res = mockResponse();
    const req = { params: { id: 'valid' } };
    await SalesController.getSaleById(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 200);
    sinon.assert.calledOnceWithExactly(res.json, succGetById.data);
  });

  it('must return status 404 and erroObj', async () => {
    sinon.stub(SalesService.prototype, 'getSaleById').resolves(failGetById);
    const res = mockResponse();
    const req = { params: { id: 'invalid' } };
    await SalesController.getSaleById(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 404);
    const { err } = failGetById
    sinon.assert.calledOnceWithExactly(res.json, { err });
  });
});


describe('Requirement 08 - Controller - Delete /sales/:id', async () => {
  const mockedData = [
    { productId: 'id1', quantity: 10 },
    { productId: 'id2', quantity: 20 },
  ]
  const sale = { _id: 'validId1', itensSold: mockedData };
  const succDelById = { status: 200, data: sale }
  const failDelById = {
    status: 404, err: {
      code: 'not_found',
      message: 'Sale not found'
    }
  }
  it('must return status 200 and the deleted sale', async () => {
    sinon.stub(SalesService.prototype, 'deleteSaleById').resolves(succDelById);
    const res = mockResponse();
    const req = { params: { id: 'valid' } };
    await SalesController.deleteSale(req, res);
    sinon.assert.calledOnceWithExactly(res.status, 200);
    sinon.assert.calledOnceWithExactly(res.json, succDelById.data);
  });
});
