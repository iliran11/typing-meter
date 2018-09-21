const clients = require('./clients');
const sharedCode = require('../client-server-code/client-server-code');
const {
  default: {
    constants: { CREATE_GAME, CREATE_COMPETITOR_GAME },
    createGame
  }
} = sharedCode;

function addPlayer(socket) {
  console.info(`Client connected [id=${socket.id}]`);
  const gameObject = createGame();
  clients.setClient(socket, 1);
  socket.emit(CREATE_GAME, gameObject);
  socket.broadcast.emit(CREATE_COMPETITOR_GAME, gameObject);
  clients.printClients();
}
function onPlayerDisconnection(socket) {
  socket.on('disconnect', () => {
    clients.deleteClient(socket);
    console.info(`Client gone [id=${socket.id}]`);
  });
}
function onConnect(socket) {
  addPlayer(socket);
  onPlayerDisconnection(socket);
}

module.exports = onConnect;
