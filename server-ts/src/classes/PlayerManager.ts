import * as io from "socket.io";
import Player from "../classes/Player";

export default class PlayerManager {
  private static instance: PlayerManager;
  private players: Map<io.Socket, Player>;
  constructor() {
    this.players = new Map();
  }
  addPlayer(player: Player): void {
    this.players.set(player.getSocket(), player);
  }
  static getInstance() {
    if (!PlayerManager.instance) {
      PlayerManager.instance = new PlayerManager();
    }
    return PlayerManager.instance;
  }
}
