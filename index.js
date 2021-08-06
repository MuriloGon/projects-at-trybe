const express = require('express');
const talker = require('./routes/talker.route');
const login = require('./routes/login.route');

const app = express();

app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', talker);
app.get('/login', login);

app.listen(PORT, () => {
  console.log('Online');
});
