const UsersModel = require('../model/Users');

async function registerUser(name, email, password) {
  const uniqueEmail = await UsersModel.isEmailUnique(email);
  if (!uniqueEmail) return { status: 409, response: { message: 'Email already registered' } };
  
  const newUser = await UsersModel.registerUser(name, email, password, 'user');
  return { status: 201, response: { user: newUser } };
}

module.exports = {
  registerUser,
};