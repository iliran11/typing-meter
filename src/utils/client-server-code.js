import {
  createGame,
  createRandomWordsArray,
  updateWordNextStatus
} from './gameUtils';
import * as constants from '../constants';
import { wpmScore } from './wpmCalculations';
export default {
  createGame,
  updateWordNextStatus,
  createRandomWordsArray,
  constants,
  wpmScore
};
