import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/game-container/gameContainer2';
import AppBar from './components/appbar2';
import 'animate.css';
import './App.css';
import CompletionModal from './components/completionModal';
import WelcomeModal from './components/welcome/cards-welcome';
import { INITIAL_START, AWAITS_TYPING, GAME_IS_ACTIVE, RESTART_PENDING } from './constants';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStatus: INITIAL_START
    };
    this.isWelcome = true;
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
  onWelcomeContinue = () => {
    this.setState({
      gameStatus: AWAITS_TYPING
    });
    this.isWelcome = false;
  };
  render() {
    const {
      isWelcome,
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
          <GameContainer
            onGameBegins={onGameBegins}
            onGameEnd={onGameEnd}
            onGameRestart={onGameRestart}
            gameStatus={gameStatus}
          />
          <WelcomeModal
            onContinue={this.onWelcomeContinue}
            onRequestChange={open => this.setState({ drawerIsOpen: open })}
            onWelcomeContinue={onWelcomeContinue}
            isOpen={isWelcome}
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
