const moment = require('moment');
// const model = require('../models');

/**
 * 
 * @param {import('socket.io').Server} io 
 * @param {import('socket.io').Socket} socket 
 */
module.exports = (io, socket, { persistentMsgs }) => {
  socket.on('message', async ({ chatMessage, nickname }) => {
    const date = `${moment().format('DD-MM-yyyy HH:mm:ss')}`;
    const message = {
      userId: socket.id,
      nickname,
      date: new Date().getTime(),
      dateFormatted: date,
      message: chatMessage,
      chatMessage: `${date} ${nickname} ${chatMessage}`,
    };

    // await model.saveMessages([
    //   { message: chatMessage, nickname, timestamp: date, userId: socket.id }]);
    persistentMsgs.push({ message: chatMessage, nickname, timestamp: date, userId: socket.id });

    io.emit('message', `${date} ${nickname} ${chatMessage}`);
    io.emit('message:better', message);
  });
};