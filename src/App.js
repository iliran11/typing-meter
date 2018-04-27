import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/game-container/gameContainer2';
import AppBar from './components/appbar2';
import 'animate.css';
import './App.css';
import CompletionModal from './components/completionModal';
import WelcomeModal from './components/welcome/stepperController';
import { INITIAL_START, AWAITS_TYPING, GAME_IS_ACTIVE, RESTART_PENDING, GAME_DURATION } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: INITIAL_START
    };
    this.isGameFinished = false;
    this.correctTypedWords = 0;
    this.wpm = 0;
    this.customWords = null;
    this.gameDuration = GAME_DURATION;
  }
  onWelcomeContinue = () => {
    this.isWelcome = false;
    this.setState({
      gameInBackground: false
    });
  };
  onGameRestart = () => {
    this.setState({
      gameStatus: RESTART_PENDING
    });
  };
  onGameEnd = options => {
    const { correctTypedWords, wpm } = options;
    this.correctTypedWords = correctTypedWords;
    this.wpm = wpm;
    this.setState({
      gameStatus: RESTART_PENDING
    });
  };
  onGameBegins = () => {
    this.setState({
      gameStatus: GAME_IS_ACTIVE
    });
  };
  onGameRestart = () => {
    this.setState({
      gameStatus: AWAITS_TYPING
    });
  };
  onWelcomeContinue = () => {
    this.setState({
      gameStatus: AWAITS_TYPING
    });
  };
  setCustomWords = value => {
    this.customWords = value;
  };
  setGameDuration = (event, value) => {
    this.gameDuration = value;
  };
  get showWelcome() {
    return this.state.gameStatus === INITIAL_START;
  }
  render() {
    const {
      onGameRestart,
      onGameEnd,
      wpm,
      onWelcomeContinue,
      onGameBegins,
      state: { gameStatus }
    } = this;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar />
          {this.showWelcome === false && (
            <GameContainer
              onGameBegins={onGameBegins}
              onGameEnd={onGameEnd}
              onGameRestart={onGameRestart}
              gameStatus={gameStatus}
              customWords={this.customWords}
              gameDuration={this.gameDuration}
            />
          )}
          <WelcomeModal
            onContinue={this.onWelcomeContinue}
            onRequestChange={open => this.setState({ drawerIsOpen: open })}
            onWelcomeContinue={onWelcomeContinue}
            isOpen={this.showWelcome}
            setCustomWords={this.setCustomWords}
            setGameDuration={this.setGameDuration}
          />
          <CompletionModal
            open={gameStatus === RESTART_PENDING}
            wpmScore={this.wpm}
            correctTypedWords={this.correctTypedWords}
            onRestart={this.onGameRestart}
            wpm={wpm}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
