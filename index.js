const express = require('express');
const productsMiddlewares = require('./middlewares/products.middleware');
const productsControllers = require('./controllers/products.controller');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', async (_request, response) => {
  response.send();
});

app.post(
  '/products',
  productsMiddlewares.validatePostProduct,
  productsControllers.postProduct
);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Listening Port: ${PORT}`);
});
