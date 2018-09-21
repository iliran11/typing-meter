import io from 'socket.io-client';
import { CREATE_GAME, CREATE_COMPETITOR_GAME } from '../constants';
import { createMyGame, createCompetitorGame } from '../store/games/gameActions';

export function initSocket(dispatch) {
  const socket = io('http://localhost:4000');
  socket.on(CREATE_GAME, data => {
    createMyGame(data, dispatch);
  });
  socket.on(CREATE_COMPETITOR_GAME, data => {
    createCompetitorGame(data, dispatch);
  });
}

export function socketHandler() {}
