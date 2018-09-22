const clients = require('./clients');
const sharedCode = require('../client-server-code/client-server-code');
const uuid = require('uuid');
const {
  default: {
    constants: { CREATE_GAME, CREATE_COMPETITOR_GAME },
    createGame,
    createRandomWordsArray
  }
} = sharedCode;

function addPlayer(socket) {
  console.info(`Client connected [id=${socket.id}]`);
  const words = createRandomWordsArray();
  const gameId = `game-${uuid()}`;
  const gameObject = createGame(gameId, words);
  clients.setClient(socket, { game: gameObject });
  socket.emit(CREATE_GAME, { words, gameId });
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
