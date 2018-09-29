import Player from "./Player";

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
