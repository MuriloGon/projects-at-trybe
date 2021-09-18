const schema = require('../schemas/User');
const { User } = require('../../models');

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

/**
 * @param {import('express').Request} req 
 * @param {import('express').Response} res 
 */
async function isUserRegistered(req, res, next) {
  const { displayName, email, password, image } = req.body;
  const user = await User.findOne({ where: { email } });
  if (user) return res.status(409).json({ message: 'User already registered' });
  req.user = { displayName, email, password, image };

  return next();
}

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
  isUserRegistered,
};