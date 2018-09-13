import React, { PureComponent, Fragment } from 'react';
import MyGameContainer from '../../components/game-container/MyGameContainer';
import ProgressBar from '../../components/progress-bar/progress-bar';
import { GAME_DURATION } from '../../constants';
import ScoreBoard from '../../components/scoreboard/scoreBoard'

class SingleGamePage extends PureComponent {
  constructor() {
    super();
    this.startGame = this.startGame.bind(this);
    this.state = {
      timeLeft: GAME_DURATION
    };
  }
  get timePassed() {
    const { timeLeft } = this.state;
    return GAME_DURATION - timeLeft;
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
  startGame() {
    this.props.startGame();
  }
  render() {
    console.log(this.wpmScore)
    return (
      <Fragment>
        <ScoreBoard
          wpm={this.displayedWpmResult}
          correctTypedWords={this.correctWordsNumber}
          disabled={this.props.active}
          specialScoreClass={this.bouncedWpmClassName}
          wpmRef={this.gaugeRef}
        />
        <ProgressBar
          animationTime={30}
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
