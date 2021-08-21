const express = require('express');
const UsersController = require('../controllers/Users');
const Middlewares = require('../middlewares');

const app = express();
app.use(express.json());

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.post('/users',
  Middlewares.validateUserData,
  UsersController.postUser);

module.exports = app;
