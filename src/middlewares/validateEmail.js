const schema = require('../schemas/User');

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function validateEmail(req, res, next) {
  const { email } = req.body;
  const { valid, message } = schema.validateEmail(email);
  if (!valid) return res.status(400).json({ message });
  return next();
}

module.exports = validateEmail;