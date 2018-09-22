import io from 'socket.io-client';
import { CREATE_GAME, CREATE_COMPETITOR_GAME } from '../constants';
import { createMyGame, createCompetitorGame } from '../store/games/gameActions';

const socketHandler =  {
  initSocket(dispatch) {
    this.socket = io('http://localhost:4000');
    this.socket.on(CREATE_GAME, data => {
      createMyGame(data, dispatch);
    });
    this.socket.on(CREATE_COMPETITOR_GAME, data => {
      createCompetitorGame(data, dispatch);
    });
  },
  emitEvent(eventName, data) {
    this.socket(eventName, data);
  }
}
export default socketHandler;
