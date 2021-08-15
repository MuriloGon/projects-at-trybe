const express = require('express');
const productsMiddlewares = require('./middlewares/products.middleware');
const salesMiddlewares = require('./middlewares/sales.middlewares');
const productsControllers = require('./controllers/productsController');

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
  (req, res) => {
    res.status(200).end('hello');
  }
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening Port: ${PORT}`);
});
