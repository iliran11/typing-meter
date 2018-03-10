import React, { Component } from 'react';
import Word from './Word.jsx';
import randomWords from 'random-words';
import ScoreBoard from './scoreBoard';
import { CPM_NULL } from '../constants';
import '../App.css';
import 'bulma/css/bulma.css';

class GameContainer extends Component {
  constructor() {
    const overallTime = secondstoMillisecond(2);
    super();
    this.state = {
      overallTime,
      startTime: Date.now(),
      timeLeft: millisecondsToSeconds(overallTime),
      isGameActive: true,
      index: 0,
      scrollIndex: 0,
      words: generateLoremIpsum(),
      cpm: CPM_NULL
    };
    this.timeLeftInterval = setInterval(() => {
      const nextTimeLeft = this.getCurrentTimeLeft();
      if (nextTimeLeft < 0) {
        this.onRunningOutTime();
      } else {
        this.setState({
          timeLeft: nextTimeLeft
        });
      }
    }, 1000);
    this.correctTypedWords = 0;
    this.cpm = '?';
    this.cpmInterval = setInterval(this.calculateCpm, 1000);
  }
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
  onRunningOutTime = () => {
    clearInterval(this.timeLeftInterval);
    clearInterval(this.cpmInterval);
  };
  onIndexChange = (index, nextIndex) => {
    if (index !== nextIndex) {
      this.correctTypedWords = this.countCorrectWords();
    }
  };
  handleChange = event => {
    const { index } = this.state;
    if (this.state.isGameActive === false) return '';
    /** useful when incrementing the index with a space - and then the space will not be counted as a typed character. */
    const newInputValue = event.target.value.trim();
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
    const nextGameStatus = this.isGameActive(nextWordsArray);
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
  isIndexShouldIncrement = (nextWordsArray, nextGameStatus) => {
    if (nextGameStatus === false) return false;
    return nextWordsArray[this.state.index].isCompleted;
  };
  isGameActive = nextWordsArray => {
    return nextWordsArray.some(element => {
      return element.isCompleted === false;
    });
  };
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
    const nextCpm = rawCpm.toPrecision(2);
    if (cpm === CPM_NULL && nextCpm === 0) return;
    this.setState({
      cpm: nextCpm
    });
  };

  renderWords = (word, index) => {
    const isActive = index === this.state.index;
    return (
      <span key={index}>
        <Word
          displayedLetters={word.challenge.split('')}
          typedLetters={word.typed.split('')}
          key={index}
          isCompleted={word.isCompleted}
          isCorrect={word.isCorrect}
          getDomElement={this.assignRef}
          isActive={isActive}
        />
        <span className="space"> </span>
      </span>
    );
  };
  render() {
    const { countCorrectWords, correctTypedWords, state: { timeLeft, cpm } } = this;
    return (
      <div className="content">
        <ScoreBoard timeLeft={timeLeft} cpm={cpm} correctTypedWords={correctTypedWords} />
        <div className="words-container">{this.state.words.map(this.renderWords)}</div>
        <input
          value={this.getInputValue()}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
          onKeyDown={this.onKeyPressed}
          tabIndex="0"
          className="input is-large is-primary"
        />
      </div>
    );
  }
}

function createWordObject({ challenge = '', typed = '', id }) {
  return {
    challenge,
    typed,
    get isCompleted() {
      const { challenge, typed } = this;
      return challenge.length <= typed.length;
    },
    get isEmpty() {
      const { typed } = this;
      const trimmedTyped = typed.trim();
      return trimmedTyped.length === 0;
    },
    get isCorrect() {
      const { challenge, typed } = this;
      const relevantTyped = typed.substr(0, challenge.length);
      return challenge === relevantTyped;
    },
    get wordArray() {
      return this.challenge.split('');
    }
  };
}
function generateWordsArray() {
  return Array.from(new Array(100), () => {
    return randomWords();
  });
}
function generateLoremIpsum() {
  const text = generateWordsArray();
  return text.map(word => {
    return createWordObject({ challenge: word });
  });
}

function secondstoMillisecond(number) {
  return number * 1000;
}
function millisecondsToSeconds(number) {
  const seconds = number / 1000;
  return Math.ceil(seconds);
}
function millisecondsToMinutes(number) {
  return number / 60000;
}
function getUniqueNumber() {
  return;
}
export default GameContainer;
