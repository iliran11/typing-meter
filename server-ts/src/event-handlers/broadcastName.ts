import io from "socket.io";
import Player from "../classes/Player";
import PlayerManager from "../classes/PlayerManager";

const playerManager = PlayerManager.getInstance();

export default function broadcastName(socket: io.Socket, playerName: string) {
  const player = playerManager.getPlayer(socket);
  player.setName(playerName);
}
