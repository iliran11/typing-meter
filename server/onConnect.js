const clients = require('./clients');
const sharedCode = require('../client-server-code/client-server-code');
const uuid = require('uuid');
const {
  default: {
    constants: {
      CREATE_GAME,
      DECREMENT_INDEX,
      CREATE_COMPETITOR_GAME,
      PLAYER_TYPING
    },
    createGame,
    createRandomWordsArray,
    updateWordNextStatus
  }
} = sharedCode;

function addPlayer(socket) {
  // console.info(`Client connected [id=${socket.id}]`);
  const words = createRandomWordsArray();
  const gameId = `game-${uuid()}`;
  const gameObject = createGame(gameId, words);
  clients.setClient(socket, { game: gameObject });
  socket.emit(CREATE_GAME, { words, gameId });
  socket.broadcast.emit(CREATE_COMPETITOR_GAME, gameObject);
  clients.printClients();
}
function onTyping(socket) {
  socket.on(PLAYER_TYPING, data => {
    const { game } = clients.getClient(socket);
    const { index, newTypedWord } = updateWordNextStatus(data, game);
    game.words[index].typed = newTypedWord;
    game.index = index;
  });
}
function onPlayerDisconnection(socket) {
  socket.on('disconnect', () => {
    clients.deleteClient(socket);
    // console.info(`Client gone [id=${socket.id}]`);
  });
}
function onDecrementIndex(socket) {
  socket.on(DECREMENT_INDEX, () => {
    const { game } = clients.getClient(socket);
    game.index = game.index - 1;
  });
}
function onConnect(socket) {
  addPlayer(socket);
  onPlayerDisconnection(socket);
  onTyping(socket);
  onDecrementIndex(socket);
}

module.exports = onConnect;
