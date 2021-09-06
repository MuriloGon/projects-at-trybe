const services = require('../services');
const { User } = require('../../models');

async function postUser(req, res) {
  const { user } = req;

  const { dataValues: { id, displayName, email, image } } = await User.create(user);
  const jwtUserInfo = { id, displayName, email, image };

  const token = services.Token.generateToken(jwtUserInfo);
  res.status(201).json({ token });
}

async function getAllUsers(req, res) {
  const users = await User.findAll({ attributes: ['id', 'displayName', 'email', 'image'] });
  res.status(200).json(users);
}

module.exports = { 
  postUser,
  getAllUsers,
};