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

app.post('/login', 
Middlewares.validateAuthData,
UsersController.postAuthUser);

app.post('/recipes',
Middlewares.userAuthorization,
Middlewares.validateRecipesData,
(req, res) => { res.send(req.user); });

module.exports = app;
