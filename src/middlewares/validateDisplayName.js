const schema = require('../schemas/User');

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
function validateDisplayName(req, res, next) {
  const { displayName } = req.body;
  const { valid, message } = schema.validateDisplayName(displayName);
  if (!valid) return res.status(400).json({ message });
  return next();
}

module.exports = validateDisplayName;