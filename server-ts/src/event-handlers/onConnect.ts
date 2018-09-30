import * as io from "socket.io";
import RoomManager from "../classes/RoomManager";
import PlayerManager from "../classes/PlayerManager";
import Player from "../classes/Player";
import onDisconnect from "./onDisconnect";
import broadcastName from "./broadcastName";
import sharedCode from "../../../client-server-code/client-server-code";

const {
  constants: { BROADCAST_NAME }
} = sharedCode;

const roomManager = RoomManager.getInstance();
const playerManager = PlayerManager.getInstance();

export default function onConnect(socket: io.Socket): void {
  const player = new Player(socket);
  roomManager.addPlayer(player);
  playerManager.addPlayer(player);
  console.log(`connect - ${socket.client.id}`);

  socket.on("disconnect", () => {
    onDisconnect(socket);
  });
  socket.on(BROADCAST_NAME, (data) => {
    broadcastName(socket,data);
  });
}
