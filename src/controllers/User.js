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

async function getById(req, res) {
  const { id } = req.params;
  const user = await User.findOne({ 
    where: { id },
    attributes: ['id', 'displayName', 'email', 'image'], 
  });
  if (!user) return res.status(404).json({ message: 'User does not exist' });

  res.status(200).json(user);
}

module.exports = { 
  postUser,
  getAllUsers,
  getById,
};