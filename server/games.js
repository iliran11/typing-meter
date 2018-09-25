const io = require('socket.io');
const sharedCode = require('../client-server-code/client-server-code');
const {
  default: {
    constants: { YOU_JOINED_ROOM, COMPETITOR_JOINED_GAME },
    createGame
  }
} = sharedCode;

const words = ['hello', 'bye'];
let currentOpenGame = 1310;
const games = new Map();
const gamesStatus = new Map();
const gamesPlayers = new Map();
const maximumPlayersPerGame = 2;
let gameId = 1310;

// initialize
gamesPlayers.set(currentOpenGame, []);
gamesStatus.set(currentOpenGame, true);
games.set(currentOpenGame, createGame(1, words));

function createGameObject() {
  gameId++;
  currentOpenGame++;
  const nextGameWords = [...words, [`GameId${gameId}`]];
  const gameObject = createGame(gameId, nextGameWords);
  gamesStatus.set(gameId, true);
  games.set(gameId, gameObject);
  gamesPlayers.set(gameId, []);
  return nextGameWords;
}
function createPlayerObject(socket, name) {
  return {
    id: name,
    name
  };
}

exports.addPlayerToGame = function addPlayerToGame(socket, name) {
  // tell the player which game room he has joined.
  updateGameInfo();
  const playerObject = createPlayerObject(socket, name);
  setPlayerInCurrentGame(playerObject);
  socket.emit(YOU_JOINED_ROOM, {
    gameId: currentOpenGame,
    players: getPlayersInCurrentGame(),
    words: [...words, `gameId:${currentOpenGame}`]
  });
  socket.broadcast.emit(COMPETITOR_JOINED_GAME, playerObject);
};

exports.printGames = function printGames() {
  debugger;
};

function updateGameInfo() {
  if (isRoomFull()) {
    createGameObject();
  }
}
function getPlayersInCurrentGame() {
  return gamesPlayers.get(currentOpenGame);
}
function setPlayerInCurrentGame(playerObject) {
  gamesPlayers.set(currentOpenGame, [...getPlayersInCurrentGame(), playerObject]);
}
function isRoomFull() {
  const playersInCurrentGame = gamesPlayers.get(currentOpenGame);
  return playersInCurrentGame.length === maximumPlayersPerGame;
}
