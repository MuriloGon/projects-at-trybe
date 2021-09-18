const { Token } = require('../services');

function authUser(req, res, next) {
  const { authorization: token } = req.headers;
  if (token === undefined || token === '') {
    return res.status(401).json({ message: 'Token not found' });
  }
  const payload = Token.verifyToken(token);
  if (payload === null) return res.status(401).json({ message: 'Expired or invalid token' });

  req.user = payload;
  next();
}

module.exports = {
  authUser,
};