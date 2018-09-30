import * as io from "socket.io";
import Game from "./Game";
// import Game from "./Game";

export default class Player {
  private name: string;
  private socket: io.Socket;
  private game: any;
  private gameId: number;
  // private game: Game;
  constructor(socket: io.Socket) {
    this.socket = socket;
  }
  createGame(gameId: number, words: string[]) {
    this.gameId = gameId;
    this.game = new Game(gameId, words);
    this.name=""
  }
  setName(name: string) {
    this.name = name;
  }
  getSocket(): io.Socket {
    return this.socket;
  }
  get playerId(): string {
    return this.name;
  }
  get roomId(): number {
    return this.gameId;
  }
}
