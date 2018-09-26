const io = require('socket.io');
const sharedCode = require('../client-server-code/client-server-code');
const {
  default: {
    constants: { YOU_JOINED_ROOM, COMPETITOR_JOINED_GAME },
    createGame
  }
} = sharedCode;

const words = ['hello', 'bye'];
const rooms = new Map();
const gamesPlayers = new Map();
const maximumPlayersPerGame = 2;
let gameIdPointer = 1113;

rooms.set(gameIdPointer, []);

exports.addPlayerToGame = function addPlayerToGame(socket, name) {
  // tell the player which game room he has joined.
  updateGameInfo();
  const playerObject = createPlayerObject(socket, name);
  const roomName = gameIdPointer;
  setPlayerInCurrentGame(playerObject, socket);
  socket.join(roomName);
  socket.emit(YOU_JOINED_ROOM, {
    gameId: gameIdPointer,
    players: getPlayersInCurrentGame(),
    words: [...words, `gameId:${gameIdPointer}`]
  });
  socket.to(roomName).emit(COMPETITOR_JOINED_GAME, playerObject);
};
exports.getGame = getGame;

exports.getGamesInRooms = function getGamesInRooms() {
  const gamesByRooms = {};
  for (const [roomId, players] of rooms.entries()) {
    const gamesInRoom = players.map(socket => {
      return { game: getGame(socket), playerId: getPlayerId(socket) };
    });
    gamesByRooms[roomId] = gamesInRoom;
  }
  return gamesByRooms;
};

exports.printGames = function printGames() {
  debugger;
};
function getGame(socket) {
  return gamesPlayers.get(socket).game;
}
function getPlayerId(socket) {
  return gamesPlayers.get(socket).id;
}
function createGameObject() {
  const nextGameWords = [...words, [`GameId${gameIdPointer}`]];
  const gameObject = createGame(gameIdPointer, nextGameWords);
  return gameObject;
}

function getCurrentGameId() {
  return;
}

function createPlayerObject(socket, name) {
  return {
    id: name,
    name,
    game: createGameObject()
  };
}

function updateGameInfo() {
  if (isRoomFull()) {
    createNewRoom();
  }
}
function getPlayersInCurrentGame() {
  const players = rooms.get(gameIdPointer);
  return players.map(socket => {
    const { name, id } = gamesPlayers.get(socket);
    return { name, id };
  });
}
function setPlayerInCurrentGame(playerObject, socket) {
  gamesPlayers.set(socket, playerObject);
  const currentPlayersInRoom = rooms.get(gameIdPointer);
  rooms.set(gameIdPointer, [...currentPlayersInRoom, socket]);
}
function isRoomFull() {
  const playersInCurrentGame = rooms.get(gameIdPointer);
  return playersInCurrentGame.length === maximumPlayersPerGame;
}

function createNewRoom() {
  gameIdPointer++;
  rooms.set(gameIdPointer, []);
}
