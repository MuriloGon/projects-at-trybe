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
const payload = { users };

/** 
 * @param {import('socket.io').Server} io 
 */
module.exports = (io) => {
  io.on('connect', (socket) => {
    messageHandler(io, socket, payload);
    userHandler(io, socket, payload);
  });
};