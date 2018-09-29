import * as socketIo from "socket.io";
import Game from "./Game";
// import Game from "./Game";

export default class Player {
  private name: string;
  private socket: socketIo.Socket;
  private game: any;
  private gameId: number;
  // private game: Game;
  constructor(name: string) {
    this.name = name;
  }
  createGame(gameId: number, words: string[]) {
    this.gameId = gameId;
    this.game = new Game(gameId, words);
  }
}
