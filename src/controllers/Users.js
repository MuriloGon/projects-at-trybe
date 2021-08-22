const UsersService = require('../services/Users');

async function postUser(req, res) {
  const { name, email, password } = req.body;
  const { status, response } = await UsersService.registerUser(name, email, password);
  res.status(status).json(response);
}

async function postAuthUser(req, res) {
  const { email, password } = req.body;
  const { status, response } = await UsersService.authUser(email, password);
  res.status(status).json(response);
}

module.exports = {
  postUser,
  postAuthUser,
};