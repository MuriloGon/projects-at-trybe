const express = require('express');
const productsMiddlewares = require('./middlewares/products.middleware');
const salesMiddlewares = require('./middlewares/sales.middlewares');
const productsControllers = require('./controllers/productsController');
const salesControllers = require('./controllers/salesController');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', async (_request, response) => {
  response.send();
});

app.get(
  '/products/',
  productsControllers.getAllProducts
);

app.get(
  '/products/:id',
  productsMiddlewares.validateIdRouteParam,
  productsControllers.getProductById
);

app.post(
  '/products',
  productsMiddlewares.validateNameAndQtyBody,
  productsControllers.postProduct
);

app.put('/products/:id',
  productsMiddlewares.validateNameAndQtyBody,
  productsControllers.putProduct
);

app.delete('/products/:id',
  productsMiddlewares.validateIdRouteParam,
  productsControllers.deleteProduct
);

app.post('/sales',
  salesMiddlewares.validateSaleRegisterArray,
  salesControllers.postNewSale
);

app.get('/sales', salesControllers.getAllSales);
app.get('/sales/:id', salesControllers.getSaleById);

app.put('/sales/:id',
  salesMiddlewares.validateSaleRegisterArray,
  salesControllers.updateItemsSold
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening Port: ${PORT}`);
});
