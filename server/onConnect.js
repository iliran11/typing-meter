const io = require('socket.io');
const clients = require('./clients');
const gamesModule = require('./games');
const sharedCode = require('../client-server-code/client-server-code');
const uuid = require('uuid');

const {
  default: {
    constants: {
      DECREMENT_INDEX,
      PLAYER_TYPING,
      BROADCAST_NAME,
      SCORES_BROADCAST
    },
    updateWordNextStatus,
    wpmScore
  }
} = sharedCode;
const gameTimer = require('./gameTimer');
function calculatePlayersScores(server) {
  const gamesInRooms = gamesModule.getGamesInRooms();
  Object.keys(gamesInRooms).forEach(roomId => {
    const scores = gamesInRooms[roomId].map(game => {
      return {
        playerId: game.playerId,
        score: wpmScore(game.game.words, 1000)
      };
    });
    server.to(roomId).emit(SCORES_BROADCAST, scores);
  });

  // const scoresArray = [];
  // clients.forEachClient((key, value) => {
  //   const clientId = key.client.id;
  //
  //   scoresArray.push({ score, name: value.name });
  // });
}
function broadcastScores(server) {
  setInterval(() => {
    calculatePlayersScores(server);
  }, 1000);
}

function addPlayer(socket) {
  socket.on(BROADCAST_NAME, name => {
    gamesModule.addPlayerToGame(socket, name);
  });
}
function onTyping(socket) {
  socket.on(PLAYER_TYPING, data => {
    const { newTypedWord: clientTypedString } = data;
    const game = gamesModule.getGame(socket);
    const { index, newTypedWord } = updateWordNextStatus(
      clientTypedString,
      game
    );
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
function onConnect(socket, server) {
  addPlayer(socket);
  onPlayerDisconnection(socket);
  onTyping(socket);
  onDecrementIndex(socket);
  broadcastScores(socket, server);
  gameTimer.startTimer();
}

module.exports = onConnect;
