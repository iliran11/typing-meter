const clients = require('./clients');
const gamesModule = require('./games');
const sharedCode = require('../client-server-code/client-server-code');
const uuid = require('uuid');
const {
  default: {
    constants: { DECREMENT_INDEX, PLAYER_TYPING, BROADCAST_NAME },
    updateWordNextStatus,
    wpmScore,
  }
} = sharedCode;
const gameTimer = require('./gameTimer');
function calculatePlayersScores() {
  const scoresArray = [];
  clients.forEachClient((key, value) => {
    const clientId = key.client.id;
    const score = wpmScore(value.game.words, gameTimer.getMinutesPassed());
    scoresArray.push({ score, name: value.name });
  });
  console.log(scoresArray);
}
function broadcastScores() {
  setInterval(calculatePlayersScores, 1000);
}

function addPlayer(socket) {
  socket.on(BROADCAST_NAME, name => {
    gamesModule.addPlayerToGame(socket, name);
  });
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
  broadcastScores(socket);
  gameTimer.startTimer();
}

module.exports = onConnect;
