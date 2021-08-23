const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());
app.use('/images/', express.static(`${process.env.PWD}/src/uploads`));

// Não remover esse end-point, ele é necessário para o avaliador
app.get('/', (request, response) => {
  response.send();
});
// Não remover esse end-point, ele é necessário para o avaliador

app.use('/login', routes.login);
app.use('/recipes', routes.recipes);
app.use('/users', routes.users);

module.exports = app;
