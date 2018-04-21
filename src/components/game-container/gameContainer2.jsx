import React, { Component, Fragment } from 'react';
import ScoreBoard from '../scoreboard/scoreBoard';
import WordsBoard from './WordsBoard';
import { GAME_DURATION, AWAITS_TYPING, GAME_IS_ACTIVE, WPM_NULL, RESTART_PENDING } from '../../constants';
import { generateLoremIpsum, secondstoMillisecond, millisecondsToSeconds, createWordObject } from '../../utils';
import CompletionModal from '../completionModal';
import ProgressBar from './progress-bar';
import isNull from 'lodash.isnull';
import isFinite from 'lodash.isfinite';
import isString from 'lodash.isstring';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState(this.props.customWords);
    this.startTime = null;
    this.inputRef = React.createRef();
    /** INPUT CHNAGE EVENT */
    this.onInputChange = event => {
      const { gameStatus } = this.props;
      if (gameStatus === AWAITS_TYPING) {
        this.onGameStart();
      }
      /** trim and lower case everything the user is typing */
      const newInputValue = event.target.value
        .trim()
        .toLowerCase()
        .substring(0, this.currentWord.challengeLength);
      const nextWordsArray = this.state.words.slice(0);
      /** create a new word object according to the new input */
      const nextCurrentWord = new createWordObject({
        challenge: this.currentWord.challenge,
        typed: newInputValue
      });
      nextWordsArray[this.currentIndex] = nextCurrentWord;
      this.setState(
        {
          words: nextWordsArray
        },
        () => {
          /** check if this word is completed, and it is the last. if so - complete the game. */
          if (nextCurrentWord.isCompleted) {
            /** second if is nested to run the getter only on isCompleted===true word. */
            if (this.currentIndex === -1) {
              this.onGameEnd();
            }
          }
        }
      );
    };
    /** KEY DOWN EVENT */
    this.handleKeyPress = event => {
      switch (event.which) {
        case 8:
          /** backspace clicked */

          if (this.currentWord.isEmpty && this.currentIndex > 0) {
            /** do not proceed to handleChange event. */
            event.preventDefault();
            const nextWordsArray = this.state.words.slice(0);
            nextWordsArray[this.previousIndex] = createWordObject({
              challenge: this.previousWord.challenge,
              typed: this.previousWord.removeLastTypedLetter
            });
            this.setState({
              words: nextWordsArray
            });
          }
          break;
        default:
          return;
      }
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { gameStatus: nextGameStatus } = nextProps;
    const { gameStatus: prevGameStatus } = prevState;
    const isRestarting = nextGameStatus === AWAITS_TYPING && prevGameStatus === RESTART_PENDING;
    if (isRestarting) {
      return { ...initialState(nextProps.customWords), gameStatus: nextProps.gameStatus };
    }
    return { gameStatus: nextProps.gameStatus };
  }
  onGameStart = () => {
    this.props.onGameBegins();
    this.startTime = Date.now();
    this.timeLeftInterval = setInterval(() => {
      if (this.timeLeft <= 0) {
        this.onGameEnd();
      }
      this.setState({
        timeLeft: this.timeLeft
      });
    }, 1000);
  };
  onGameEnd = () => {
    clearInterval(this.timeLeftInterval);
    this.props.onGameEnd({
      correctTypedWords: this.correctWordsNumber,
      wpm: this.wpmNormalized
    });
    this.inputRef.current.blur();
  };

  get timePassed() {
    /** returns time passed in seconds */
    return GAME_DURATION - this.timeLeft;
  }
  get timePassedMinutes() {
    /** returns time passed in minutes. */
    return this.timePassed / 60;
  }

  get timeLeft() {
    if (isNull(this.startTime)) return GAME_DURATION;
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
    const currentIndex = this.state.words.findIndex(word => {
      return word.isCompleted === false;
    });
    return currentIndex;
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
  get wpmNormalized() {
    const wpmScore = this.wpmScore;
    if (isFinite(wpmScore)) {
      /** if the number is smaller than 0, just return 0. */
      if (wpmScore < 0) return 0;
      return Math.round(this.wpmScore);
    }
    return WPM_NULL;
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
    return this.props.gameStatus === GAME_IS_ACTIVE;
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
  render() {
    return (
      <Fragment>
        <ScoreBoard
          wpm={this.wpmNormalized}
          correctTypedWords={this.correctWordsNumber}
          disabled={this.isWordBoardDisabled}
        />
        <ProgressBar isProgressCounting={this.isGameActive} animationTime={GAME_DURATION} />
        <input
          autoFocus
          value={this.inputValue}
          onChange={this.onInputChange}
          onKeyDown={this.handleKeyPress}
          tabIndex="0"
          className={`input is-large is-primary size3 ${this.inputClasses}`}
          placeholder={this.inputPlaceHolder}
          ref={this.inputRef}
        />
        <WordsBoard words={this.state.words} currentGamePosition={this.currentIndex} isActive={this.isGameActive} />
        <CompletionModal
          open={this.isGameFinished}
          wpmScore={this.wpm}
          correctTypedWords={this.correctTypedWords}
          wpm={this.wpmNormalized}
        />
      </Fragment>
    );
  }
}

export default GameContainer;

const initialState = (customWords) => {
  const customWordArray = isString(customWords) ? customWords.split(' ') :null;
  const overallTime = secondstoMillisecond(GAME_DURATION);
  return {
    overallTime,
    timeLeft: millisecondsToSeconds(overallTime),
    index: 0,
    scrollIndex: 0,
    words: generateLoremIpsum(customWordArray),
    wpm: WPM_NULL,
    gameAboutToBegin: false
  };
};
