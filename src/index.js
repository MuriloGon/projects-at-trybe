const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.send());

app.use('/user', routes.user);
app.use('/login', routes.login);
app.use('/categories', routes.categories);
app.use('/post', routes.post);

module.exports = app;