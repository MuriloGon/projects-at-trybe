const { User } = require('../../models');
const { Token } = require('../services');

async function postLogin(req, res) {
  const { login } = req;
  const user = await User.findOne({ where: { email: login.email } });
  const { id, displayName, email, image } = user;
  const token = Token.generateToken({ id, displayName, email, image });
  return res.status(200).json({ token });
}

module.exports = {
   postLogin,
};