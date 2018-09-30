import * as io from "socket.io";
import RoomManager from "../classes/RoomManager";
import PlayerManager from "../classes/PlayerManager";
import Player from "../classes/Player";

export default function onDisconnect(socket: io.Socket): void {
  const player = PlayerManager;
}
