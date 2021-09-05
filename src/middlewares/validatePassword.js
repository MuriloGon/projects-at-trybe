const schema = require('../schemas/User');

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function validatePassword(req, res, next) {
  const { password } = req.body;
  const { valid, message } = schema.validatePassword(password);
  if (!valid) return res.status(400).json({ message });
  return next();
}

module.exports = validatePassword;