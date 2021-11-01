const moment = require('moment');

/**
 * 
 * @param {import('socket.io').Server} io 
 * @param {import('socket.io').Socket} socket 
 */
module.exports = (io, socket) => {
  socket.on('message', ({ chatMessage, nickname }) => {
    console.log({ chatMessage, nickname });
    io.emit('message', `${moment().format('DD-MM-yyyy HH:mm:ss')} ${nickname} ${chatMessage}`);
  });
};