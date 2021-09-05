const express = require('express');

const app = express();

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => response.send());

module.exports = app;