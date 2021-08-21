const UsersService = require('../services/Users');

async function postUser(req, res) {
  const { name, email, password } = req.body;
  const { status, response } = await UsersService.registerUser(name, email, password);
  res.status(status).json(response);
}

module.exports = {
  postUser,
};