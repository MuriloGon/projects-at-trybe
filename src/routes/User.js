const { Router } = require('express');
const middlewares = require('../middlewares');

const route = Router();

route.post('/',
  middlewares.validateDisplayName,
  middlewares.validateEmail,
  middlewares.validatePassword, (req, res) => { res.send('oi'); });

module.exports = route;