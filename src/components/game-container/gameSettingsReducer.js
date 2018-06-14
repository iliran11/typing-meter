
import {GAME_DURATION} from '../../constants'
const initialState = {
  gameDuration: GAME_DURATION,
  customWords: null
}
export default (state = initialState, action) => {
  switch (action.type) {
  //  case 'SIMPLE_ACTION':
  //   return {
  //    result: action.payload
  //   }
   default:
    return state
  }
}