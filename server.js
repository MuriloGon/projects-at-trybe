const express = require('express');
const Http = require('http');
const { Server } = require('socket.io');
const sockets = require('./sockets');

const app = express();
const http = Http.createServer(app);
app.use(express.static('public'));

const io = new Server(http);

sockets(io);

const { PORT = 3000 } = process.env;
http.listen(PORT, () => console.log(`listening ${PORT}`));