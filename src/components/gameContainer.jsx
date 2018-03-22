import React, { Component, Fragment } from 'react';
import Word from './Word.jsx';
import ScoreBoard from './scoreboard/scoreBoard';
import { CPM_NULL, METRICS_INTERVAL_DELAY, GAME_DURATION, DEBUG_MODE } from '../constants';
import {
  generateLoremIpsum,
  secondstoMillisecond,
  millisecondsToSeconds,
  millisecondsToMinutes,
  createWordObject,
  noop
} from '../utils';
import ProgressBar from './progress-bar';
import isUndefined from 'lodash.isundefined';
import * as $ from 'jquery'

class GameContainer extends Component {
  /*=============================================
=            LIFE CYCLE            =
=============================================*/

  constructor() {
    const overallTime = secondstoMillisecond(GAME_DURATION);
    super();
    this.correctTypedWords = 0;
    this.cpm = CPM_NULL;
    this.state = {
      overallTime,
      startTime: Date.now(),
      timeLeft: millisecondsToSeconds(overallTime),
      isGameActive: true,
      index: 0,
      scrollIndex: 0,
      words: generateLoremIpsum(),
      cpm: this.cpm
    };
    this.setMetricIntervals();
  }
  /*=============================================
=            INPUT HANDLERS            =
=============================================*/
  onKeyPressed = event => {
    const { words, index, scrollIndex } = this.state;
    const currentWord = words[index];
    switch (event.which) {
      case 8:
        /** backspace clicked */
        /** handle a situation when there is a backspace, when the index is 0, which result in -1 */
        if (currentWord.isEmpty) {
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
    const { index } = this.state;
    if (this.state.isGameActive === false) return '';
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
    const nextGameStatus = this.haveNonCompletedWords(nextWordsArray);
    const currentWord = nextWordsArray[index];
    const nextIndex = currentWord.isCompleted ? index + 1 : index;
    this.setState(
      {
        words: nextWordsArray,
        isGameActive: nextGameStatus,
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
=            GAME EVENTS            =
=============================================*/
  onGameStart = () => {};
  onRunningOutTime = () => {
    clearInterval(this.timeLeftInterval);
    clearInterval(this.cpmInterval);
    this.onGameCompletion();
  };
  onIndexChange = (index, nextIndex) => {
    if (index !== nextIndex) {
      this.correctTypedWords = this.countCorrectWords();
    }
  };
  onGameCompletion = () => {
    const { onGameCompletion = noop } = this.props;
    /** execute prop */
    onGameCompletion();
  };
  /*=============================================
=            GETTERS            =
=============================================*/

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
  haveNonCompletedWords(nextWordsArray) {
    /** if all words are marked as completed - game is not active anymore. */
    const haveNonCompletedWords = nextWordsArray.some(element => {
      return element.isCompleted === false;
    });
    /** if everything is completed ...  */
    if (!haveNonCompletedWords) {
      this.onGameCompletion();
    }
    return haveNonCompletedWords;
  }
  getCurrentTimeLeft = () => {
    const millisecondsPassed = Date.now() - this.state.startTime;
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
    const { cpm } = this.state;
    const millisecondsPassed = Date.now() - this.state.startTime;
    const minutesPassed = millisecondsToMinutes(millisecondsPassed);
    const rawCpm = this.numberOfCorrectWords() / minutesPassed;
    const nextCpm = Math.round(rawCpm);
    if (cpm === CPM_NULL && nextCpm === 0) return;
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
  render() {
    const { correctTypedWords, state: { cpm } } = this;
    return (
      <div className="content">
        <ScoreBoard cpm={cpm} correctTypedWords={correctTypedWords} />
        <ProgressBar />
        <input
          value={this.getInputValue()}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onKeyDown={this.onKeyPressed}
          tabIndex="0"
          className="input is-large is-primary"
          ref={node => {
            this.inputElement = node;
          }}
        />
        <div className="words-container">{this.state.words.map(this.renderWords)}</div>
      </div>
    );
  }
}
export default GameContainer;
