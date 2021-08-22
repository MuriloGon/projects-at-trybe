const jwt = require('jsonwebtoken');
const { secret } = require('../variables');

function userAuthorization(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'missing auth token' });
  try {
    const userData = jwt.verify(authorization, secret);
    req.user = userData;
    return next();
  } catch (error) {
    return res.status(401).json({ message: 'jwt malformed' });
  }
}

module.exports = userAuthorization;