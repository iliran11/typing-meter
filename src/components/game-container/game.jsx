import React, { Component, Fragment } from "react";
import ScoreBoard from "../scoreboard/scoreBoard";
import WordsList from "./WordsList";
import {
  AWAITS_TYPING,
  GAME_IS_ACTIVE,
  WPM_NULL,
  RESTART_PENDING,
  INCREMENT_INDEX,
  DECREMENT_INDEX,
  GAME_DURATION
} from "../../constants";
import {
  generateLoremIpsum,
  secondstoMillisecond,
  millisecondsToSeconds,
  isLastCharIsSpace,
  processTextToArray,
  createIndexWordObjects
} from "../../utils/utils";
import CompletionModal from "../completionModal";
import ProgressBar from "./progress-bar";
import isNull from "lodash.isnull";
import isFinite from "lodash.isfinite";
import isUndefined from "lodash.isundefined";
import Snackbar from "material-ui/Snackbar";

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = this.initialState;
    this.startTime = null;
    this.inputRef = React.createRef();
    this.joyride = React.createRef();
    /** INPUT CHNAGE EVENT */
    this.onInputChange = event => {
      /** check if space has been clicked after completing a word. */
      const spaceHasClicked = isLastCharIsSpace(event.target.value);
      if (this.currentWord.isCompleted) {
        if (spaceHasClicked) {
          this.changeIndex({ changeType: INCREMENT_INDEX });
          return;
        } else {
          this.changeSpaceWarningStatus(true)
          return;
        }
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
      const nextCurrentWord = nextWordsArray[this.currentIndex];
      this.setState(
        {
          words: nextWordsArray
        },
        () => {
          /** check if this word is completed, and it is the last. if so - complete the game. */
          if (nextCurrentWord.isCompleted) {
            /** second if is nested to run the getter only on isCompleted===true word. */
            if (this.isLastWord) {
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
  changeSpaceWarningStatus = (nextStatus) => {
    this.setState({
      clickSpaceTip: nextStatus
    })
  }
  closeSpaceWarning = () => {
    this.changeSpaceWarningStatus(false)
  }
  get wordsArray() {
    if (isNull(this.props.customWords)) {
      return generateLoremIpsum();
    }
    return processTextToArray(this.props.customWords);
  }
  get wordsObjectArray() {
    return createIndexWordObjects(this.wordsArray);
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
    if (isNull(currentWord)) return "";
    return this.isGameActive ? this.currentWord.typed : "";
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
    return "input-class";
  }
  get inputPlaceHolder() {
    return this.state.gameStatus === GAME_IS_ACTIVE ? "" : "Type to start ...";
  }
  get shouldRunJoyride() {
    return false;
  }
  render() {
    return (
      <Fragment>
        <ScoreBoard
          wpm={this.wpmNormalized}
          correctTypedWords={this.correctWordsNumber}
          disabled={this.isWordBoardDisabled}
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
          wpmScore={this.wpmNormalized}
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
