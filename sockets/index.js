const messageHandler = require('./messageHandler');
const userHandler = require('./userHandler');

/*
  User
    user:updateNickname
    user:
*/

/**
 * @typedef {{userId: string, nickname: string}} User
 * @type {Array.<User>} Users
 */
const users = [];
const persistentMsgs = [];
const payload = { users, persistentMsgs };

/** 
 * @param {import('socket.io').Server} io 
 */
module.exports = (io) => {
  io.on('connect', (socket) => {
    // socket.disconnect(true);
    messageHandler(io, socket, payload);
    userHandler(io, socket, payload);
  });
};