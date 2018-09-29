import * as socketIo from "socket.io";
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
  createGame(game: any, gameId: number) {
    this.game = game;
    this.gameId = gameId;
  }
}
