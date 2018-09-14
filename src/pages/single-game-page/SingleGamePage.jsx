import React, { PureComponent, Fragment } from 'react';
import MyGameContainer from '../../components/game-container/MyGameContainer';
import ProgressBar from '../../components/progress-bar/progress-bar';
import {
  GAME_DURATION,
  START_CALCULATING_TIME,
  WPM_NULL
} from '../../constants';
import ScoreBoard from '../../components/scoreboard/scoreBoard';

class SingleGamePage extends PureComponent {
  constructor() {
    super();
    this.initiateCountDown = this.initiateCountDown.bind(this);
    this.startGame = this.startGame.bind(this);
    this.onGameEnd = this.onGameEnd.bind(this);
    this.state = {
      timeLeft: GAME_DURATION
    };
  }
  componentWillUnmount() {
    window.clearTimeout(this.countdownIntervalId);
  }
  onGameEnd() {
    this.props.createResultRecord({
      wpmScore: this.wpmNormalized,
      correctTypedWords: 10
    });
    this.props.endGame();
  }
  initiateCountDown() {
    this.countdownIntervalId = window.setInterval(() => {
      this.setState({
        timeLeft: this.state.timeLeft - 1
      });
      if (this.state.timeLeft === 0) {
        this.onGameEnd();
      }
    }, 1000);
  }
  get timePassed() {
    const { timeLeft } = this.state;
    return GAME_DURATION - timeLeft;
  }

  get timePassedMinutes() {
    /** returns time passed in minutes. */
    return this.timePassed / 60;
  }

  get typingStatistcs() {
    return this.props.words.reduce(
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
  get isWpmCalculating() {
    /** decide if to indicate that there is not enough
     *  stable data to display about the wpm.
     */
    return this.timePassed < START_CALCULATING_TIME && this.props.active;
  }
  get wpmNormalized() {
    const wpmScore = this.wpmScore;
    if (this.isWpmCalculating) return 'Calculating ...';
    /** while waiting for the game to start - show just 0. */
    if (this.props.active === false) return 0;
    if (isFinite(wpmScore)) {
      /** if the number is smaller than 0, just return 0. */
      if (wpmScore < 0) return 0;
      return Math.round(this.wpmScore);
    }
    return WPM_NULL;
  }
  startGame() {
    this.props.startGame();
    this.initiateCountDown();
  }
  render() {
    return (
      <Fragment>
        <ScoreBoard wpm={this.wpmNormalized} disabled={this.props.active} />
        <ProgressBar
          animationTime={GAME_DURATION}
          isProgressCounting={this.props.active}
        />
        <MyGameContainer
          onGameStart={this.startGame}
          active={this.props.active}
        />
      </Fragment>
    );
  }
}

export default SingleGamePage;
