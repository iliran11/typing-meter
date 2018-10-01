import Player from "./Player";
import PlayerManager from "./PlayerManager";
import { isObject } from "util";

export default class Room {
  private static globalRoomCounter: number = 1;
  private maxPlayersInRoom: number = 2;
  private players: Player[];
  private gameWords: string[];
  private timerId: any;
  private timePassed: number;
  roomId: number;

  constructor(words: string[]) {
    this.roomId = Room.globalRoomCounter;
    Room.globalRoomCounter++;
    this.players = [];
    this.startGame();
    this.gameWords = words;
  }
  addPlayer(player: Player): void {
    this.players.push(player);
    player.createGame(this.roomId, this.gameWords);
  }
  deletePlayer(player: Player): void {
    const index = this.getPlayerIndex(player.playerId);
    this.players.splice(index, 1);
  }
  private getPlayerIndex(playerId: string): number {
    return this.players.findIndex((player: Player) => {
      return player.playerId === playerId;
    });
  }
  get playersInRoom() {
    return this.players.map((player: Player) => {
      return player.serializable;
    });
  }
  get isRoomFull(): boolean {
    return this.players.length === this.maxPlayersInRoom;
  }
  private incrementTimePassed(incrementValue: number): void {
    this.timePassed += incrementValue;
  }
  private startGame(): void {
    const intervalTime: number = 1000;
    this.timerId = setInterval(this.incrementTimePassed, intervalTime);
  }
  private endGame() {}
}
