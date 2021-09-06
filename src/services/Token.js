const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'default-secret';

function generateToken(data) {
  const token = jwt.sign(data, secret, { algorithm: 'HS256' });
  return token;
}

function verifyToken(token) {
  try {
    const data = jwt.verify(token, secret);
    return data;
  } catch (error) {
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};