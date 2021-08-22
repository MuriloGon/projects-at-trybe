const jwt = require('jsonwebtoken');
const { secret } = require('../variables');

function userAuthorization(req, res, next) {
  try {
    const { token } = req.body;
    const userData = jwt.verify(token, secret);
    req.user = userData;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'nananinanão' });
  }
}

module.exports = userAuthorization;