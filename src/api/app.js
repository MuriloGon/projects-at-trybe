const express = require('express');
const UsersControllers = require('../controllers/Users');
const RecipesControllers = require('../controllers/Recipes');
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
  UsersControllers.postUser);

app.post('/login', 
Middlewares.validateAuthData,
UsersControllers.postAuthUser);

app.post('/recipes',
Middlewares.userAuthorization,
Middlewares.validateRecipesData,
RecipesControllers.postRecipe);

module.exports = app;
