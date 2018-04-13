import React, { Component, Fragment } from 'react';
import Word from './Word.jsx';
import ScoreBoard from '../scoreboard/scoreBoard';
import WordsBoard from './WordsBoard';
import {
  CPM_NULL,
  METRICS_INTERVAL_DELAY,
  GAME_DURATION,
  DEBUG_MODE,
  INITIAL_START,
  AWAITS_TYPING,
  GAME_IS_ACTIVE,
  RESTART_PENDING
} from '../../constants';
import {
  generateLoremIpsum,
  secondstoMillisecond,
  millisecondsToSeconds,
  millisecondsToMinutes,
  createWordObject,
  noop
} from '../../utils';
import CompletionModal from '../completionModal';
import ProgressBar from './progress-bar';

class GameContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.onInputChange = event => {
      console.log('input change')
      const { gameStatus } = this.props;
      if (gameStatus === AWAITS_TYPING) {
        this.props.onGameBegins();
      }
      /** trim and lower case everything the user is typing */
      const newInputValue = event.target.value.trim().toLowerCase();
      const nextWordsArray = this.state.words.slice(0);
      /** create a new word object according to the new input */
      const nextCurrentWord = new createWordObject({
        challenge: this.currentWord.challenge,
        typed: newInputValue
      });
      nextWordsArray[this.currentIndex] = nextCurrentWord;
      this.setState({
        words: nextWordsArray
      });
    };
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
      }
    };
  }
  // static getDerivedStateFromProps = (nextProps, prevState) => {};
  componentDidMount = () => {};
  shouldComponentUpdate(nextProps, nextState) {
    return true;
  }
  componentDidUpdate(prevProps, prevState) {}
  get initialState() {
    const overallTime = secondstoMillisecond(GAME_DURATION);
    return {
      overallTime,
      timeLeft: millisecondsToSeconds(overallTime),
      index: 0,
      scrollIndex: 0,
      words: generateLoremIpsum(),
      cpm: this.cpm,
      gameAboutToBegin: false
    };
  }
  get currentWord() {
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
    return this.isGameActive ? this.currentWord.typed : '';
  }
  get cpmScore() {
    return '10';
  }
  get correctWordsNumber() {
    return '20';
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
    return 'placeholder';
  }
  render() {
    return (
      <Fragment>
        <ScoreBoard
          cpm={this.cpmScore}
          correctTypedWords={this.correctWordsNumber}
          disabled={this.isWordBoardDisabled}
        />
        <ProgressBar isProgressCounting={this.isGameActive} />
        <input
          autoFocus
          value={this.inputValue}
          onChange={this.onInputChange}
          onKeyDown={this.handleKeyPress}
          tabIndex="0"
          className={`input is-large is-primary size3 ${this.inputClasses}`}
          placeholder={this.inputPlaceHolder}
          ref={node => {
            this.inputElement = node;
          }}
        />
        <WordsBoard words={this.state.words} currentGamePosition={this.currentIndex} isActive={this.isGameActive} />
        <CompletionModal
          open={this.isGameFinished}
          wpmScore={this.cpm}
          correctTypedWords={this.correctTypedWords}
          cpm={this.cpmScore}
        />
      </Fragment>
    );
  }
}

export default GameContainer;
