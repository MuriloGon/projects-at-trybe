const Login = require('../services/Login');

function loginPost(req, res) {
  const token = Login.generateToken();
  res.status(200).json({ token });
}

module.exports = loginPost;