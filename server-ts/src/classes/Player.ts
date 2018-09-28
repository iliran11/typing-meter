import * as socketIo from "socket.io";

export default class Player {
  private name: string;
  private socket: socketIo.Socket;
  constructor(message: string) {
    console.log(message);
  }
}
