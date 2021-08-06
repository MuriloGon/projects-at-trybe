// Modules
require('dotenv').config({ path: 'config/.env' });
const express = require('express');
// Routes
const talker = require('./routes/talker.route');
const login = require('./routes/login.route');
// Middlewares
const bodyParseHandler = require('./middlewares/bodyErrorParse');

const app = express();

app.use(express.json());
app.use(bodyParseHandler);

const HTTP_OK_STATUS = 200;

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talker);
app.use('/login', login);

app.listen(process.env.PORT, () => {
  console.log('Online');
});
