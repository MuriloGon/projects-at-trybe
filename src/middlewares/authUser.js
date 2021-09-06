const { User } = require('../../models');

async function authUser(req, res, next) {
  const { email } = req.body;
  const userQuery = await User.findOne({ where: { email } });
  if (!userQuery) return res.status(400).json({ message: 'Invalid fields' });
  req.user = userQuery;
  next();
}

module.exports = authUser;