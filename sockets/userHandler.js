// const model = require('../models');

const createUser = (id, nick = id) => ({
  id,
  nickname: nick === 'null' ? id.substring(0, 16) : nick,
});

const deserializeMsg = ({ message, timestamp, nickname, userId }) => ({
  userId,
  nickname,
  date: new Date(timestamp).getTime(),
  dateFormatted: timestamp,
  message,
  chatMessage: `${timestamp} ${nickname} ${message}`,
});

/**
 * 
 * @param {import('socket.io').Server} io 
 * @param {import('socket.io').Socket} socket 
 */
module.exports = async (io, socket, payload) => {
  // vars
  const { users, persistentMsgs } = payload;

  // closures
  const updateUsers = () => io.emit('online:update', users);

  // online users
  users.push(createUser(socket.id, socket.id.substring(0, 16)));
  updateUsers();

  // const stateSaved = (await model.getMessages()).map(deserializeMsg);
  const stateSaved = persistentMsgs;

  socket.emit('user:firstConnection', users.find(({ id }) => id === socket.id), stateSaved);

  // events

  socket.on('user:updateNickname', (newUsername) => {
    const indexToUpdate = users.findIndex(({ id }) => socket.id === id);
    users[indexToUpdate].nickname = newUsername;
    updateUsers();
  });

  socket.on('disconnect', () => {
    const indexToDelete = users.findIndex(({ id }) => socket.id === id);
    users.splice(indexToDelete, 1);
    updateUsers();
  });
};
