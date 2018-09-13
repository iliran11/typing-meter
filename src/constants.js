export const WPM_NULL = '0';
export const START_CALCULATING_TIME = 7;
export const CALCULATING_INTERVAL = 1;
export const GAME_DURATION = 60;
export const METRICS_INTERVAL_DELAY = 500;
export const DEBUG_MODE = false;
export const FAILURE_ANIMATION = `animated jello`;
export const SUCCESS_ANIMATION = `animated pulse`;
export const WORDS_AMOUNT = 100;

/** GAME STATUS */
export const INITIAL_START = 0;
export const AWAITS_TYPING = 1;
export const GAME_IS_ACTIVE = 2;
export const RESTART_PENDING = 3;

export const CREATE_RESULT_RECORD = 'create-result-record';

export const GAME_DURATION_OPTIONS = [
  { value: 20, label: '20' },
  { value: 30, label: '30' },
  { value: 40, label: '40' },
  { value: 50, label: '50' },
  { value: 60, label: '60' }
];

export const CREATE_GAME = 'create-game';
export const UPDATE_WORD = 'update-word';
export const GAME_ID_MY = 'game-id-my';
export const INCREMENT_INDEX = 'increment-index';
export const DECREMENT_INDEX = 'decrement-index';
export const START_GAME = 'start-game';
export const END_GAME = 'end-game';
export const RESET_GAME_WORDS = 'reset-game-words';