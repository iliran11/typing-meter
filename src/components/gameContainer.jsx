import React, { Component, Fragment } from 'react';
import Word from './Word.jsx';
import ScoreBoard from './scoreboard/scoreBoard';
import {
  CPM_NULL,
  METRICS_INTERVAL_DELAY,
  GAME_DURATION,
  DEBUG_MODE,
  INITIAL_START,
  AWAITS_TYPING,
  GAME_IS_ACTIVE,
  RESTART_PENDING
} from '../constants';
import {
  generateLoremIpsum,
  secondstoMillisecond,
  millisecondsToSeconds,
  millisecondsToMinutes,
  createWordObject,
  noop
} from '../utils';
import CompletionModal from './completionModal';
import ProgressBar from './progress-bar';

class GameContainer extends Component {
  /*=============================================
=            LIFE CYCLE            =
=============================================*/

  constructor() {
    super();
    const overallTime = secondstoMillisecond(GAME_DURATION);
    this.state = this.setupGame();
  }
  componentDidMount = () => {
    this.inputElement.focus();
  };
  /*=============================================
=            INPUT HANDLERS            =
=============================================*/
  onKeyPressed = event => {
    const { state: { words, index, scrollIndex }, props: { gameStatus } } = this;
    if (gameStatus <= GAME_IS_ACTIVE) return;
    const currentWord = words[index];
    switch (event.which) {
      case 8:
        /** backspace clicked */
        /** handle a situation when there is a backspace, when the index is 0, which result in -1 */
        if (currentWord.isEmpty && index > 0) {
          const nextIndex = index - 1;
          /** nextIndexNormalized - don't allow negative, if user keep click on backspace when index is 0. */
          const nextIndexNormalized = nextIndex < 0 ? 0 : nextIndex;
          this.setState(
            {
              index: nextIndexNormalized,
              scrollIndex: scrollIndex - 1
            },
            () => this.onIndexChange(index, nextIndexNormalized)
          );
        }
        break;
      case 32:
        /** space clicked - if the typing of the word is compelted - move on. */
        if (currentWord.isCompleted) {
          const nextIndex = index + 1;
          this.setState(
            {
              index: nextIndex,
              scrollIndex: scrollIndex + 1
            },
            this.onIndexChange(index, nextIndex)
          );
        }
        break;
      default:
    }
  };
  handleChange = event => {
    const { state: { index }, props: { gameStatus } } = this;
    if (this.shouldHandleInput === false) return;
    if (gameStatus === AWAITS_TYPING) this.onGameStart();
    /** useful when incrementing the index with a space - and then the space will not be counted as a typed character. */
    const newInputValue = event.target.value.trim().toLowerCase();
    const nextWordsArray = this.state.words.map((element, index) => {
      /** update the current active word with the typed value.*/
      if (index === this.state.index) {
        return new createWordObject({
          challenge: element.challenge,
          typed: newInputValue
        });
      }
      return element;
    });
    /** check if all words are completed. */
    this.haveNonCompletedWords(nextWordsArray);
    const currentWord = nextWordsArray[index];
    const nextIndex = currentWord.isCompleted ? index + 1 : index;
    this.setState(
      {
        words: nextWordsArray,
        index: nextIndex
      },
      () => this.onIndexChange(index, nextIndex)
    );
  };

  /*=============================================
=  INTERVALS (calculating periodically time left and score metrics)            =
=============================================*/

  setMetricIntervals = () => {
    if (DEBUG_MODE === false) {
      /** interval to update how much time left */
      this.timeLeftInterval = setInterval(() => {
        const nextTimeLeft = this.getCurrentTimeLeft();
        if (nextTimeLeft < 0) {
          this.onRunningOutTime();
        } else {
          this.setState({
            timeLeft: nextTimeLeft
          });
        }
      }, METRICS_INTERVAL_DELAY);
      /** interval to re-calculate the CPM. */
      this.cpmInterval = setInterval(this.calculateCpm, METRICS_INTERVAL_DELAY);
    }
  };
  /*=============================================
=            UI EVENTS            =
=============================================*/

  /*=============================================
=            GAME EVENTS            =
=============================================*/
  onRunningOutTime = () => {
    this.onGameCompletion();
  };
  onGameStart = () => {
    clearInterval(this.inputBouncingInterval);
    this.startTime = Date.now();
    this.setMetricIntervals();
  };
  onIndexChange = (index, nextIndex) => {
    if (index !== nextIndex) {
      this.correctTypedWords = this.countCorrectWords();
    }
  };
  onGameCompletion = () => {
    const { props: { onGameCompletion = noop, onGameRestart }, state: { cpm }, correctTypedWords } = this;
    clearInterval(this.timeLeftInterval);
    clearInterval(this.cpmInterval);
    this.inputElement.blur();
    /** execute prop */
    onGameCompletion({
      correctTypedWords,
      cpm
    });
  };
  restartGame = () => {
    this.props.onGameRestart();
    this.setState(this.setupGame());
  };
  setupGame = () => {
    const overallTime = secondstoMillisecond(GAME_DURATION);
    this.correctTypedWords = 0;
    this.cpm = CPM_NULL;
    const words = this.props.customWords || generateLoremIpsum()
    return {
      overallTime,
      timeLeft: millisecondsToSeconds(overallTime),
      index: 0,
      scrollIndex: 0,
      words,
      cpm: this.cpm,
      gameAboutToBegin: false
    };
  };

  /*=============================================
=            GETTERS            =
=============================================*/
  isGameFinished = () => {
    const { haveNonCompletedWords, isRunningOutOfTime, state: { gameState } } = this;
    /** game is active alone is not enough. on the start of the game - game is active is also false.
     *  we have to check certain things to determine it's not active because it's finished.
     */
    const finishedConditions = !haveNonCompletedWords() || isRunningOutOfTime();
    return finishedConditions && gameState < GAME_IS_ACTIVE;
  };
  isRunningOutOfTime = () => {
    return this.state.timeLeft <= 0;
  };
  currentWord = () => {
    return this.state.words[this.state.index];
  };
  getInputValue = () => {
    if (this.state.isGameActive === false) return '';
    return this.currentWord().typed;
  };
  countCorrectWords = () => {
    const { words } = this.state;
    /** filter the words array and get an array only containting isCorrect=true. */
    const correctWordsArray = words.filter(element => {
      return element.isCorrect;
    });
    return correctWordsArray.length;
  };
  /** Events */
  isIndexShouldIncrement = (nextWordsArray, nextGameStatus) => {
    if (nextGameStatus === false) return false;
    return nextWordsArray[this.state.index].isCompleted;
  };
  haveNonCompletedWords = (nextWordsArray = this.state.words) => {
    const { onGameCompletion } = this.props;
    /** if all words are marked as completed - game is not active anymore. */
    const haveNonCompletedWords = nextWordsArray.some(element => {
      return element.isCompleted === false;
    });
    /** if everything is completed ...  */
    if (!haveNonCompletedWords) {
      this.onGameCompletion();
    }
  };
  getCurrentTimeLeft = () => {
    const millisecondsPassed = Date.now() - this.startTime;
    const millisecondsLeft = this.state.overallTime - millisecondsPassed;
    return millisecondsToSeconds(millisecondsLeft);
  };
  numberOfCorrectWords = () => {
    return this.state.words.reduce((accumulator, currentValue) => {
      if (currentValue.isCorrect) {
        return accumulator + 1;
      }
      return accumulator;
    }, 0);
  };
  calculateCpm = () => {
    const { cpm, gameState } = this.state;
    const millisecondsPassed = Date.now() - this.startTime;
    const minutesPassed = millisecondsToMinutes(millisecondsPassed);
    const rawCpm = this.numberOfCorrectWords() / minutesPassed;
    const nextCpm = Math.round(rawCpm);
    if ((cpm === CPM_NULL && nextCpm === 0) || gameState < GAME_IS_ACTIVE) return;
    this.setState({
      cpm: nextCpm
    });
  };
  renderWords = (word, index) => {
    const isActive = index === this.state.index;
    return (
      <Fragment key={index}>
        <Word
          displayedLetters={word.challenge.split('')}
          typedLetters={word.typed.split('')}
          isCompleted={word.isCompleted}
          isCorrect={word.isCorrect}
          getDomElement={this.assignRef}
          isActive={isActive}
        />{' '}
      </Fragment>
    );
  };
  get shouldHandleInput() {
    const { props: { gameStatus }, haveNonCompletedWords } = this;
    /** handle input is the game is active, or if the game is not active, but still have uncompleted words. */
    return gameStatus === GAME_IS_ACTIVE || gameStatus === AWAITS_TYPING;
  }

  get disabledClass() {
    const { gameStatus } = this.props;
    return gameStatus === GAME_IS_ACTIVE ? '' : 'disabled';
  }
  render = () => {
    const {
      correctTypedWords,
      disabledClass,
      isInputGrayed,
      restartGame,
      state: { cpm },
      props: { gameStatus }
    } = this;
    const placeHolder = gameStatus >= GAME_IS_ACTIVE ? '' : 'CLICK TO START';
    return (
      <div className="content">
        <ScoreBoard cpm={cpm} correctTypedWords={correctTypedWords} disabled={disabledClass} />
        <ProgressBar isProgressCounting={gameStatus >= GAME_IS_ACTIVE} />
        <input
          autoFocus
          value={this.getInputValue()}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onKeyDown={this.onKeyPressed}
          tabIndex="0"
          className={`input is-large is-primary size3 ${isInputGrayed}`}
          placeholder={placeHolder}
          ref={node => {
            this.inputElement = node;
          }}
        />
        <div className={`words-container size1 transitionable ${disabledClass}`}>
          {this.state.words.map(this.renderWords)}
        </div>
        <CompletionModal
          open={gameStatus === RESTART_PENDING}
          wpmScore={this.cpm}
          correctTypedWords={this.correctTypedWords}
          onRestart={restartGame}
          cpm={cpm}
        />
      </div>
    );
  };
}
export default GameContainer;
