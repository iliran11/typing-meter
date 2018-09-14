import { GAME_DURATION } from '../../constants';
const initialState = {
  gameDuration: GAME_DURATION,
  customWords: null
};
export default (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};
