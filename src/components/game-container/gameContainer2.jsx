import React, { Component, Fragment } from 'react';
import ScoreBoard from '../scoreboard/scoreBoard';
import WordsList from './WordsList';
import {
  AWAITS_TYPING,
  GAME_IS_ACTIVE,
  WPM_NULL,
  RESTART_PENDING,
  INCREMENT_INDEX,
  DECREMENT_INDEX,
  GAME_DURATION
} from '../../constants';
import {
  replaceLineBreaks,
  generateLoremIpsum,
  secondstoMillisecond,
  millisecondsToSeconds,
  isLastCharIsSpace
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
    this.state = initialState(AWAITS_TYPING);
    this.startTime = null;
    this.inputRef = React.createRef();
    this.joyride = React.createRef();
    /** INPUT CHNAGE EVENT */
    this.onInputChange = event => {
      /** check if space has been clicked after completing a word. */
      const spaceHasClicked = isLastCharIsSpace(event.target.value);
      if (spaceHasClicked && this.currentWord.isCompleted) {
        this.changeIndex({ changeType: INCREMENT_INDEX });
        return;
      }
      const { gameStatus } = this.state;
      if (gameStatus === AWAITS_TYPING) {
        this.onGameStart();
      }
      /** trim and lower case everything the user is typing */
      const newInputValue = event.target.value
        .trim()
        .toLowerCase()
        .substring(0, this.currentWord.challengeLength);
      const nextWordsArray = this.state.words.slice(0);
      /** mutate the current word in next words array */
      nextWordsArray[this.currentIndex].typed = newInputValue;
      const nextCurrentWord = nextWordsArray[this.currentIndex].typed;
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
            nextWordsArray[
              this.previousIndex
            ].typed = this.previousWord.removeLastTypedLetter;
            this.setState({
              words: nextWordsArray,
              index: this.currentIndex + DECREMENT_INDEX
            });
          }
          break;
        default:
          return;
      }
    };
  }
  onGameStart = () => {
    this.setState({
      gameStatus: GAME_IS_ACTIVE
    });
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
    this.setState({
      gameStatus: RESTART_PENDING
    });
    this.inputRef.current.blur();
  };
  onGameRestart = () => {
    const nextState = initialState();
    this.setState(nextState);
  };
  changeIndex = options => {
    const { changeType } = options;
    this.setState({
      index: this.currentIndex + changeType
    });
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
  render() {
    return (
      <Fragment>
        <Joyride
          ref={this.joyride}
          run={true}
          steps={this.state.steps}
          autoStart={true}
          type="continuous"
        />
        <ScoreBoard
          wpm={this.wpmNormalized}
          correctTypedWords={this.correctWordsNumber}
          disabled={this.isWordBoardDisabled}
        />
        {this.state.gameStatus === GAME_IS_ACTIVE && (
          <ProgressBar
            isProgressCounting={this.isGameActive}
            animationTime={GAME_DURATION}
          />
        )}
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
        <WordsList
          words={this.state.words}
          currentGamePosition={this.currentIndex}
          isActive={this.isGameActive}
        />
        <CompletionModal
          open={this.state.gameStatus === RESTART_PENDING}
          wpmScore={this.wpmNormalized}
          correctTypedWords={this.correctWordsNumber}
          onRestart={this.onGameRestart}
        />
      </Fragment>
    );
  }
}

export default GameContainer;

const initialState = () => {
  const customWords = localStorage.getItem('customWords')
  const customWordArray = isString(customWords)
    ? replaceLineBreaks(customWords).split(' ')
    : null;
  const overallTime = secondstoMillisecond(GAME_DURATION);
  return {
    overallTime,
    timeLeft: millisecondsToSeconds(overallTime),
    index: 0,
    scrollIndex: 0,
    words: generateLoremIpsum(customWordArray),
    wpm: WPM_NULL,
    gameDuration: GAME_DURATION,
    gameAboutToBegin: false,
    gameStatus: AWAITS_TYPING,
    steps: [
      {
        title: 'Score Board',
        selector: '.joyride-step-scoreboard',
        text: 'Your metrics will update while you play typing.'
      },
      {
        position: 'top-left',
        selector: '.joyride-step--correct',
        title: 'Number of Correctly Typed Words',
        text:
          'The number of wholly correct words. a correct word has a green background.'
      },
      {
        title: 'Words Per Minute',
        position: 'top-right',
        selector: '.joyride-step--wpm',
        text: (
          <div className="joyride-box--wpm">
            <span>The Score of Your Game.</span>
            <br />
            <span>Will update as you type.</span>
            <br />
            <span>
              The less errors your make, and the faster you type, the score will
              be higher.
            </span>
            <br />
            <a href="http://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula">
              Read More ...{' '}
            </a>
          </div>
        )
      },
      {
        title: 'Time Left',
        selector: '.joyride-step--progress-bar',
        text:
          'Indicates how much time is left to play. You can adjust game duration in settings.'
      },
      {
        title: 'Start Typing',
        selector: '.joyride-step--input',
        text: 'Start the game by typing in the input!'
      }
    ]
  };
};
