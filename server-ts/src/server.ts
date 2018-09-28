import * as socketIo from "socket.io";
const server = socketIo.listen(4000);
import * as onConnect from "./onConnect";

// event fired every time a new client connects:
server.on("connection", (socket: number) => {
  onConnect.onConnect();
});

// sends each client its current sequence number
setInterval(() => {
  // clients.printClients();
}, 1000);
