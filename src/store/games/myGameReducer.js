import {createGame} from './gameActions'

const initialState = createGame();

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
