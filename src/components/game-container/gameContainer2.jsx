import React, { Component, Fragment } from 'react';
import ScoreBoard from '../scoreboard/scoreBoard';
import WordsBoard from './WordsBoard';
import {
  AWAITS_TYPING,
  GAME_IS_ACTIVE,
  WPM_NULL,
  RESTART_PENDING,
  INCREMENT_INDEX,
  DECREMENT_INDEX
} from '../../constants';
import {
  replaceLineBreaks,
  generateLoremIpsum,
  secondstoMillisecond,
  millisecondsToSeconds,
  createWordObject
} from '../../utils';
import CompletionModal from '../completionModal';
import ProgressBar from './progress-bar';
import isNull from 'lodash.isnull';
import isFinite from 'lodash.isfinite';
import isString from 'lodash.isstring';
import Joyride from 'react-joyride';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = initialState(this.props.customWords, this.props.gameDuration);
    this.startTime = null;
    this.inputRef = React.createRef();
    this.joyride = React.createRef();
    /** INPUT CHNAGE EVENT */
    this.onInputChange = event => {
      const { gameStatus } = this.props;
      if (gameStatus === AWAITS_TYPING) {
        this.onGameStart();
      }
      /** trim and lower case everything the user is typing */
      console.log(this.currentWord, this.currentIndex);
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
              words: nextWordsArray,
              index: this.currentIndex + DECREMENT_INDEX
            });
          }
          break;
        case 32:
          if (this.currentWord.isCompleted) {
            this.changeIndex({ changeType: INCREMENT_INDEX });
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
      console.log(nextProps);
      return { ...initialState(nextProps.customWords, nextProps.gameDuration), gameStatus: nextProps.gameStatus };
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
  changeIndex = options => {
    const { changeType } = options;
    this.setState({
      index: this.currentIndex + changeType
    });
  };
  get timePassed() {
    /** returns time passed in seconds */
    return this.props.gameDuration - this.timeLeft;
  }
  get timePassedMinutes() {
    /** returns time passed in minutes. */
    return this.timePassed / 60;
  }

  get timeLeft() {
    if (isNull(this.startTime)) return this.props.gameDuration;
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
        <Joyride ref={this.joyride} run={true} steps={this.state.steps} autoStart={true} />
        <ScoreBoard
          wpm={this.wpmNormalized}
          correctTypedWords={this.correctWordsNumber}
          disabled={this.isWordBoardDisabled}
        />
        <ProgressBar isProgressCounting={this.isGameActive} animationTime={this.props.gameDuration} />
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

const initialState = (customWords, gameDuration) => {
  const customWordArray = isString(customWords) ? replaceLineBreaks(customWords).split(' ') : null;
  const overallTime = secondstoMillisecond(gameDuration);
  return {
    overallTime,
    timeLeft: millisecondsToSeconds(overallTime),
    index: 0,
    scrollIndex: 0,
    words: generateLoremIpsum(customWordArray),
    wpm: WPM_NULL,
    gameAboutToBegin: false,
    steps: [
      {
        title: <h1> hello </h1>,
        selector: '.joyride-step-scoreboard',
        title:'Your Score Board',
        text: 'Your metrics while you type.',
      },
      {
        title: <h1> hello </h1>,
        selector: '.joyride-step-scoreboard',
        title:'Your Score Board',
        text: 'Your metrics while you type.',
      }
    ]
  };
};
