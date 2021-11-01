const moment = require('moment');

/**
 * 
 * @param {import('socket.io').Server} io 
 * @param {import('socket.io').Socket} socket 
 */
module.exports = (io, socket) => {
  socket.on('message', ({ chatMessage, nickname }) => {
    const date = `${moment().format('DD-MM-yyyy HH:mm:ss')}`;
    const message = {
      userId: socket.id,
      nickname,
      date: new Date().getTime(),
      dateFormatted: date,
      message: chatMessage,
      chatMessage: `${date} ${nickname} ${chatMessage}`,
    };
    io.emit('message', `${date} ${nickname} ${chatMessage}`);
    io.emit('message:better', message);
  });
};