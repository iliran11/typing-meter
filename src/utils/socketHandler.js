import io from 'socket.io-client';
import { CREATE_GAME } from '../constants';
import { createMyGame } from '../store/games/gameActions';

export function initSocket(dispatch) {
  const socket = io('http://localhost:4000');
  socket.on(CREATE_GAME, data => {
    createMyGame(data,dispatch);
  });
}

export function socketHandler() {}
