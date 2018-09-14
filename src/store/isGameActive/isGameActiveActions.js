import {START_GAME,END_GAME} from '../../constants'

export function startGame() {
  return {
    type: START_GAME 
  }
}

export function endGame() {
  return {
    type: END_GAME
  }
}