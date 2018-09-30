import * as io from "socket.io";
import RoomManager from "../classes/RoomManager";
import PlayerManager from "../classes/PlayerManager";
import Player from "../classes/Player";
import onDisconnect from "./onDisconnect";

const roomManager = RoomManager.getInstance();
const playerManager = PlayerManager.getInstance();

export default function onConnect(socket: io.Socket): void {
  const player = new Player(socket);
  roomManager.addPlayer(player);
  playerManager.addPlayer(player);
  socket.on("disconnect", onDisconnect);
}
