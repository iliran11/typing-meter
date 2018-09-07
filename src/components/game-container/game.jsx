import React, { Component, Fragment } from 'react';
import ScoreBoard from '../scoreboard/scoreBoard';
import WordsList from './WordsList';
import {
  AWAITS_TYPING,
  GAME_IS_ACTIVE,
  WPM_NULL,
  RESTART_PENDING,
  START_CALCULATING_TIME,
  CALCULATING_INTERVAL
} from '../../constants';
import {
  generateLoremIpsum,
  secondstoMillisecond,
  millisecondsToSeconds,
  processTextToArray,
  createIndexWordObjects,
  getRandomNumber
} from '../../utils/utils';
import { onInputChange, handleKeyPress } from './inputMethods';
import CompletionModal from '../completionModal';
import ProgressBar from './progress-bar';
import isNull from 'lodash.isnull';
import isFinite from 'lodash.isfinite';
import isUndefined from 'lodash.isundefined';
import Snackbar from 'material-ui/Snackbar';

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.startTime = null;
    this.inputRef = React.createRef();
    this.joyride = React.createRef();
    this.gaugeRef = React.createRef();
    /** INPUT CHNAGE EVENT */
    this.onInputChange = onInputChange.bind(this);
    /** KEY DOWN EVENT */
    this.handleKeyPress = handleKeyPress.bind(this);
  }
  onGameStart = () => {
    this.setState(
      {
        gameStatus: GAME_IS_ACTIVE
      },
      () => {
        this.bouncedWpmResult = this.wpmNormalized;
        this.bouncedWpmClassName = this.specialScoreClass;
        this.props.changeGameStatus(true);
      }
    );
    this.startTime = Date.now();
    this.timeLeftInterval = setInterval(() => {
      if (this.timeLeft % CALCULATING_INTERVAL === 0) {
        this.bouncedWpmResult = this.wpmNormalized;
        this.bouncedWpmClassName = this.specialScoreClass;
      }
      if (this.timeLeft <= 0 || this.state.gameStatus === RESTART_PENDING) {
        this.onGameEnd();
      }
      this.setState({
        timeLeft: this.timeLeft
      });
    }, 1000);
  };
  onGameEnd = () => {
    clearInterval(this.timeLeftInterval);
    this.setState({
      gameStatus: RESTART_PENDING
    });
    this.inputRef.current.blur();
  };
  onGameRestart = () => {
    const nextState = this.initialState;
    this.setState(nextState);
  };
  changeIndex = options => {
    const { changeType } = options;
    this.setState({
      index: this.currentIndex + changeType
    });
  };
  changeSpaceWarningStatus = nextStatus => {
    this.setState({
      clickSpaceTip: nextStatus
    });
  };
  closeSpaceWarning = () => {
    this.changeSpaceWarningStatus(false);
  };
  animateGauge = () => {
    this.gaugeRef.current.classList.remove('animate-correctness');
    setTimeout(() => {
      this.gaugeRef.current.classList.add('animate-correctness');
    }, 0);
  };
  get wordsArray() {
    if (isNull(this.props.customWords)) {
      return generateLoremIpsum();
    }
    return processTextToArray(this.props.customWords);
  }
  get wordsObjectArray() {
    return createIndexWordObjects(this.wordsArray, getRandomNumber());
  }
  get initialState() {
    const overallTime = secondstoMillisecond(this.props.gameDuration);
    return {
      overallTime,
      timeLeft: millisecondsToSeconds(overallTime),
      index: 0,
      scrollIndex: 0,
      words: this.wordsObjectArray,
      wpm: WPM_NULL,
      gameDuration: this.props.gameDuration,
      gameAboutToBegin: false,
      gameStatus: AWAITS_TYPING,
      clickSpaceTip: false
    };
  }
  get timePassedMinutes() {
    /** returns time passed in minutes. */
    return this.timePassed / 60;
  }

  get timeLeft() {
    if (isNull(this.startTime)) return this.state.gameDuration;
    const millisecondsPassed = Date.now() - this.startTime;
    const millisecondsLeft = this.state.overallTime - millisecondsPassed;
    return millisecondsToSeconds(millisecondsLeft);
  }
  get currentWord() {
    const { currentIndex } = this;
    /** if the index is -1, it means the game has ended. so return an empty word. */
    if (currentIndex === -1) return null;
    return this.state.words[this.currentIndex];
  }
  get previousWord() {
    if (this.currentIndex === 0) return this.currentWord;
    return this.state.words[this.previousIndex];
  }
  get currentIndex() {
    return this.state.index;
  }
  get wordsNumber() {
    return this.state.words.length;
  }
  get isLastWord() {
    const index = this.state.words[this.currentIndex + 1];
    return isUndefined(index);
  }
  get previousIndex() {
    return this.currentIndex - 1;
  }
  get inputValue() {
    const { currentWord } = this;
    if (isNull(currentWord)) return '';
    return this.isGameActive ? this.currentWord.typed : '';
  }
  get typingStatistcs() {
    return this.state.words.reduce(
      (accumulator, currentValue) => {
        const resultObject = currentValue.numberOfCorrectEntities;
        accumulator.correct += resultObject.correct;
        accumulator.wrong += resultObject.wrong;
        return accumulator;
      },
      { correct: 0, wrong: 0 }
    );
  }
  get wpmScore() {
    /**http://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula */
    /** returns an object of total number of correct and wrong chars */
    const { correct, wrong } = this.typingStatistcs;
    const grossWpm = (correct + wrong) / 5 / this.timePassedMinutes;
    const errorFactor = wrong / this.timePassedMinutes;
    return grossWpm - errorFactor;
  }
  get timePassed() {
    const { gameDuration, timeLeft } = this.state;
    return gameDuration - timeLeft;
  }
  get wpmNormalized() {
    const wpmScore = this.wpmScore;
    if (this.isWpmCalculating) return 'Calculating ...';
    /** while waiting for the game to start - show just 0. */
    if (this.state.gameStatus === AWAITS_TYPING) return 0;
    if (isFinite(wpmScore)) {
      /** if the number is smaller than 0, just return 0. */
      if (wpmScore < 0) return 0;
      return Math.round(this.wpmScore);
    }
    return WPM_NULL;
  }
  get displayedWpmResult() {
    return this.state.gameStatus === GAME_IS_ACTIVE
      ? this.bouncedWpmResult
      : this.wpmNormalized;
  }
  get isWpmCalculating() {
    /** decide if to indicate that there is not enough
     *  stable data to display about the wpm.
     */
    return (
      this.timePassed < START_CALCULATING_TIME &&
      this.state.gameStatus === GAME_IS_ACTIVE
    );
  }
  get specialScoreClass() {
    /** do not show the scoer in the start - it is still not stable ... */
    if (this.isWpmCalculating) return 'calculating';
  }
  get correctWordsNumber() {
    const correctWordsArray = this.state.words.filter(currentElement => {
      return currentElement.isCorrect;
    });
    return correctWordsArray.length;
  }
  get isWordBoardDisabled() {
    return this.isGameActive;
  }
  get isGameActive() {
    return this.state.gameStatus === GAME_IS_ACTIVE;
  }
  get isGameFinished() {
    return false;
  }
  get inputClasses() {
    return 'input-class';
  }
  get inputPlaceHolder() {
    return this.state.gameStatus === GAME_IS_ACTIVE ? '' : 'Type to start ...';
  }
  get shouldRunJoyride() {
    return false;
  }
  render() {
    return (
      <Fragment>
        <ScoreBoard
          wpm={this.displayedWpmResult}
          correctTypedWords={this.correctWordsNumber}
          disabled={this.isWordBoardDisabled}
          specialScoreClass={this.bouncedWpmClassName}
          wpmRef={this.gaugeRef}
        />
        <div className="input-container">
          <input
            autoFocus
            value={this.inputValue}
            onChange={this.onInputChange}
            onKeyDown={this.handleKeyPress}
            tabIndex="0"
            className={`input is-large is-primary size3 joyride-step--input ${
              this.inputClasses
            }`}
            placeholder={this.inputPlaceHolder}
            ref={this.inputRef}
          />
        </div>
        {this.state.gameStatus === GAME_IS_ACTIVE && (
          <ProgressBar
            isProgressCounting={this.isGameActive}
            animationTime={this.state.gameDuration}
          />
        )}
        <WordsList
          words={this.state.words}
          currentGamePosition={this.currentIndex}
          isActive={this.isGameActive}
        />
        <CompletionModal
          open={this.state.gameStatus === RESTART_PENDING}
          wpmScore={this.displayedWpmResult}
          correctTypedWords={this.correctWordsNumber}
          onRestart={this.onGameRestart}
        />
        <Snackbar
          open={this.state.clickSpaceTip}
          message="Press Space. Advance To Next Word"
          autoHideDuration={2000}
          onRequestClose={this.closeSpaceWarning}
        />
      </Fragment>
    );
  }
}

export default Game;
