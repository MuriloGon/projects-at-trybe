/// <reference path="../utils/types.js" />
const { usersCollection } = require('../variables');
const conn = require('./connection'); 

/**
 * @param {string} email 
 * @returns {Promise<Boolean>}
 */
async function isEmailUnique(email) {
  const users = await (await conn()).collection(usersCollection);
  const result = await users.findOne({ email });
  if (!result) return true;
  return false;
}

/**
 * @param {string} name - user name
 * @param {string} email - user email
 * @param {string} password - user password
 * @param {string} role - user role
 * @returns {Promise<null> | Promise<{_id: string, name: string, email: string, role: string}>}
 */
 async function registerUser(name, email, password, role) {
  const users = await (await conn()).collection(usersCollection);
  const { insertedId } = await users.insertOne({ name, email, password, role });
  return { _id: insertedId.toString(), name, email, role };
}

/**
 * verify user credentials
 * @param {string} email - user email
 * @param {string} password - user password
 * @returns {Promise<Boolean> | Promise<null> | Promise<{id: string, email: string, role: string}>}
 */
async function authUser(email, password) {
  const users = await (await conn()).collection(usersCollection);
  const user = await users.findOne({ email });
  if (!user) return null;
  if (user.password !== password) return false;
  const idKey = '_id';
  return {
    id: user[idKey].toString(),
    email: user.email,
    role: user.role,
  };
}

module.exports = {
  isEmailUnique,
  registerUser,
  authUser,
};