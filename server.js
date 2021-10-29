const express = require('express');
const Http = require('http');
const { Server } = require('socket.io');
const moment = require('moment');

const app = express();
const http = Http.createServer(app);
app.use(express.static('public'));

const io = new Server(http);

io.on('connection', (socket) => {
  socket.on('message', ({ chatMessage, nickname }) => {
    io.emit('message', `${moment().format('DD-MM-yyyy HH:mm:ss')} ${nickname} ${chatMessage}`);
  });
});

const { PORT = 3000 } = process.env;
http.listen(PORT, () => console.log(`listening ${PORT}`));