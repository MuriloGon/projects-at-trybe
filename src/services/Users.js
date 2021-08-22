const jwt = require('jsonwebtoken');
const UsersModel = require('../model/Users');

const secret = 'my-super-secret';

async function registerUser(name, email, password) {
  const uniqueEmail = await UsersModel.isEmailUnique(email);
  if (!uniqueEmail) return { status: 409, response: { message: 'Email already registered' } };

  const newUser = await UsersModel.registerUser(name, email, password, 'user');
  return { status: 201, response: { user: newUser } };
}

async function authUser(email, password) {
  const auth = await UsersModel.authUser(email, password);
  if (!auth) return { status: 401, response: { message: 'Incorrect username or password' } };
  const token = jwt.sign(auth, secret, { algorithm: 'HS256' });
  return { status: 200, response: { token } };
}

module.exports = {
  registerUser,
  authUser,
};