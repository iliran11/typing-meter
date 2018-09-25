import io from 'socket.io-client';
import {
  CREATE_GAME,
  CREATE_COMPETITOR_GAME,
  PLAYER_JOINED_GAME,
  YOU_JOINED_ROOM,
  COMPETITOR_JOINED_GAME
} from '../constants';
import { createMyGame, addCompetitor } from '../store/games/gameActions';

const socketHandler = {
  initSocket(dispatch) {
    this.socket = io('http://localhost:4000');
    this.socket.on(YOU_JOINED_ROOM, data => {
      createMyGame(
        { words: data.words, gameId: data.gameId, players: data.players },
        dispatch
      );
    });
    this.socket.on(COMPETITOR_JOINED_GAME,playerObject=>{
      addCompetitor(playerObject,dispatch)
    })
  },
  emitEvent(eventName, data) {
    this.socket.emit(eventName, data);
  }
};
export default socketHandler;
