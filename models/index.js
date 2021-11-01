const connection = require('./connection');

async function saveMessages(messages) {
  const conn = await connection();
  const webchat = conn.collection('messages');
  await webchat.insertMany(messages);
}

async function getMessages() {
  const conn = await connection();
  const webchat = conn.collection('messages');
  return webchat.find().toArray();
}

module.exports = {
  saveMessages,
  getMessages,
};