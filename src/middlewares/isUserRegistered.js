const { User } = require('../../models');

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

module.exports = isUserRegistered;