const express = require('express');
const Http = require('http');
const { Server } = require('socket.io');
const sockets = require('./sockets');

const app = express();
const http = Http.createServer(app);
app.use(express.static('public'));

const io = new Server(http);

setInterval(async () => {
  console.log(await io.allSockets());
}, 500);

sockets(io);

app.get('/disconnectall', async (req, res) => {
  // try {
  //   Object.keys(io.sockets.sockets).forEach((s) => {
  //     console.log(io.sockets.sockets[s].disconnect(true));
  //   });
  //   return res.json({ message: 'sockets disconnected' });
  // } catch (error) {
  //   return res.json(error);
  // }
  // const socketsIds = [...await io.sockets.allSockets()];
  // socketsIds.forEach((sckt) => {
  // });
  io.close();

  res.json({ socketsDeleted: sockets });
});

const { PORT = 3000 } = process.env;
http.listen(PORT, () => console.log(`listening ${PORT}`));