const io = require('socket.io'),
  server = io.listen(4000);
const sharedCode= require('../server-client-code/sharedCode').default;

let sequenceNumberByClient = new Map();

// event fired every time a new client connects:
server.on('connection', socket => {
  console.info(`Client connected [id=${socket.id}]`);
  // initialize this client's sequence number
  sequenceNumberByClient.set(socket, 1);
  // const gameObject = sharedCode.createGame();
  socket.emit(sharedCode.constants.CREATE_GAME, sharedCode.createGame());

  // when socket disconnects, remove it from the list:
  socket.on('disconnect', () => {
    sequenceNumberByClient.delete(socket);
    console.info(`Client gone [id=${socket.id}]`);
  });
});

// sends each client its current sequence number
setInterval(() => {
  for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
    // console.log(client)
    // client.emit('se9q-num', sequenceNumber);
    sequenceNumberByClient.set(client, sequenceNumber + 1);
  }
}, 1000);
