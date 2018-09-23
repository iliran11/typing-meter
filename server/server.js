const io = require('socket.io');
const server = io.listen(4000);
const clients = require('./clients');
const onConnect = require('./onConnect');

// event fired every time a new client connects:
server.on('connection', onConnect);

// sends each client its current sequence number
setInterval(() => {
  // clients.printClients();
}, 1000);
