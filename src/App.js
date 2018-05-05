import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/game-container/gameContainer2';
import AppBar from './components/appbar2';
import 'animate.css';
import './App.css';
import CompletionModal from './components/completionModal';
import { INITIAL_START, AWAITS_TYPING, GAME_IS_ACTIVE, RESTART_PENDING, GAME_DURATION } from './constants';
import Settings from './components/settings';
import Dialog from 'material-ui/Dialog';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: AWAITS_TYPING,
      settingsOpen: false,
      customWords: null,
      gameDuration: GAME_DURATION
    };
    this.isGameFinished = false;
    this.correctTypedWords = 0;
    this.wpm = 0;
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
  toggleSettings = () => {
    const gameStatus = this.isGameActive ? AWAITS_TYPING : GAME_IS_ACTIVE;
    this.setState({
      gameStatus,
      settingsOpen: !this.state.settingsOpen
    });
  };
  onFormSubmit = options => {
    const { customWords, gameDuration } = options;
    this.setState(
      {
        customWords,
        gameDuration,
        gameStatus: GAME_IS_ACTIVE
      },
      () => {
        this.toggleSettings();
      }
    );
  };
  get isGameActive() {
    return this.state.gameStatus === GAME_IS_ACTIVE;
  }
  render() {
    const {
      onGameRestart,
      onGameEnd,
      wpm,
      onGameBegins,
      state: { gameStatus }
    } = this;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar onSettingsClick={this.toggleSettings} />
          <GameContainer
            onGameBegins={onGameBegins}
            onGameEnd={onGameEnd}
            onGameRestart={onGameRestart}
            gameStatus={gameStatus}
            customWords={this.state.customWords}
            gameDuration={this.state.gameDuration}
          />
          <CompletionModal
            open={gameStatus === RESTART_PENDING}
            wpmScore={this.wpm}
            correctTypedWords={this.correctTypedWords}
            onRestart={this.onGameRestart}
            wpm={wpm}
          />
          <Dialog open={this.state.settingsOpen}>
            <Settings
              setCustomWords={this.setCustomWords}
              setGameDuration={this.setGameDuration}
              onSubmit={this.onFormSubmit}
            />
          </Dialog>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
