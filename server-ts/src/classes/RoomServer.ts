import Room from "./Room";
import * as socketIo from "socket.io";
import Player from "./Player";

export default class RoomServer {
  private static instance: RoomServer;
  static words = ["hello", "goodbye"];
  rooms: Map<number, Room>;
  openRoomsIds: number[];

  private constructor() {
    this.rooms = new Map();
    // create first new room;
    this.createNewRoom();
  }
  private get openRooms(): number {
    if (this.openRoomsIds.length > 0) {
      return this.openRoomsIds[0];
    }
    return -1;
  }
  private get availableRoomNumber(): number {
    return this.openRoomsIds[0];
  }
  addPlayer(player: Player): void {
    if (this.openRooms > 0) {
      this.addPlayerToExistingRoom(player);
    } else {
      this.addPlayerToNewRoom(player);
    }
  }
  private addPlayerToExistingRoom(player: Player): void {
    const selectedRoom: Room = this.rooms.get(this.availableRoomNumber);
    selectedRoom.addPlayer(player);
    if (selectedRoom.isRoomFull) {
      this.openRoomsIds.pop();
    }
    return;
  }
  private createNewRoom(): Room {
    const room = new Room(RoomServer.words);
    this.rooms.set(room.roomId, room);
    this.openRoomsIds = [room.roomId];
    return room;
  }
  private addPlayerToNewRoom(player: Player): void {
    const room = this.createNewRoom();
    room.addPlayer(player);
  }
  static getInstance() {
    if (!RoomServer.instance) {
      RoomServer.instance = new RoomServer();
    }
    return RoomServer.instance;
  }
}
