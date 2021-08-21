/// <reference path="../utils/types.js" />

const collection = require('./connection'); 

/**
 * @param {string} email 
 * @returns {Promise<null> | Promise<User>}
 */
async function isEmailUnique(email) {
  const users = await collection('users');
  const result = await users.findOne({ email });
  return result;
}

module.exports = {
  isEmailUnique,
};