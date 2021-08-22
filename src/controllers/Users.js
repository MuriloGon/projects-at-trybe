const UsersService = require('../services/Users');

async function postUser(req, res) {
  const { name, email, password } = req.body;
  const { ok, error } = await UsersService.registerUser(name, email, password);
  if (error) return res.status(error.status).json(error.data);
  return res.status(ok.status).json(ok.data);
}

async function postAuthUser(req, res) {
  const { email, password } = req.body;
  const { ok, error } = await UsersService.authUser(email, password);
  if (error) return res.status(error.status).json(error.data);
  return res.status(ok.status).json(ok.data);
}

module.exports = {
  postUser,
  postAuthUser,
};