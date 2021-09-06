const services = require('../services');
const { User } = require('../../models');

async function postUser(req, res) {
  const { user } = req;

  const { dataValues: { id, displayName, email, image } } = await User.create(user);
  const jwtUserInfo = { id, displayName, email, image };

  const token = services.Token.generateToken(jwtUserInfo);
  res.status(201).json({ token });
}

module.exports = postUser;