const jwt = require('jsonwebtoken');
const UsersModel = require('../model/Users');
const { okRes, errRes } = require('../utils/apiResponse');
const { secret } = require('../variables');

async function registerUser(name, email, password) {
  const uniqueEmail = await UsersModel.isEmailUnique(email);
  if (!uniqueEmail) return errRes(409, { message: 'Email already registered' });

  const user = await UsersModel.registerUser(name, email, password, 'user');
  return okRes(201, { user });
}

async function authUser(email, password) {
  const auth = await UsersModel.authUser(email, password);
  if (!auth) return errRes(401, { message: 'Incorrect username or password' });
  const token = jwt.sign(auth, secret, { algorithm: 'HS256' });
  return okRes(200, { token });
}

module.exports = {
  registerUser,
  authUser,
};