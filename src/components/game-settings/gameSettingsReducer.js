
import {GAME_DURATION} from '../../constants'
const initialState = {
  gameDuration: GAME_DURATION,
  customWords: null
}
export default (state = initialState, action) => {
  switch (action.type) {
   case 'UPDATE_CUSTOM_WORDS':
    return {
     result: 'ssss'
    }
   default:
    return state
  }
}