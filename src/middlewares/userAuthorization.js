const jwt = require('jsonwebtoken');
const { secret } = require('../variables');

function userAuthorization(req, res, next) {
  try {
    const { authorization } = req.headers;
    const userData = jwt.verify(authorization, secret);
    req.user = userData;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
}

module.exports = userAuthorization;