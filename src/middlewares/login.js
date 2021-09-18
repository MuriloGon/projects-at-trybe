const { User } = require('../../models');
const schema = require('../schemas');

async function validateUniqueEmail(req, res, next) {
  const { email } = req.body;
  const userQuery = await User.findOne({ where: { email } });
  if (!userQuery) return res.status(400).json({ message: 'Invalid fields' });
  req.user = userQuery;
  next();
}
async function validateLogin(req, res, next) {
  const { email, password } = req.body;

  const validateEmail = schema.Login.validateEmail(email);
  if (!validateEmail.valid) return res.status(400).json({ message: validateEmail.message });
  
  const validatePassword = schema.Login.validatePassword(password);
  if (!validatePassword.valid) return res.status(400).json({ message: validatePassword.message });

  req.login = { email, password };
  next();
}

module.exports = {
  validateUniqueEmail,
  validateLogin,
};