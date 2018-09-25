import {
  createGame,
  createRandomWordsArray,
  updateWordNextStatus
} from './gameUtils';

import * as constants from '../constants';
import { wpmScore } from './wpmCalculations';
export default {
  updateWordNextStatus,
  createRandomWordsArray,
  constants,
  wpmScore,
  createGame,
};
