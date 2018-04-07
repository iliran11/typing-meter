import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/gameContainer.jsx';
import AppBar from './components/appBar';
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
    this.cpm = 0;
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
  onGameCompletion = options => {
    const { correctTypedWords, cpm } = options;
    this.correctTypedWords = correctTypedWords;
    this.cpm = cpm;
    this.setState({
      gameStatus: RESTART_PENDING
    });
  };
  onGameBegins = () => {
    this.setState({
      gameStatus: GAME_IS_ACTIVE
    });
  };
  onRestart = () => {
    this.setState({
      gameStatus: RESTART_PENDING
    });
  };
  onWelcomeContinue = () => {
    this.setState({
      gameStatus: AWAITS_TYPING
    });
    this.isWelcome = false;
  };
  render() {
    const { isWelcome, onGameRestart, onGameCompletion, cpm, onWelcomeContinue,onGameBegins, state: { gameStatus } } = this;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar />
          <GameContainer
            onGameBegins={onGameBegins}
            onGameCompletion={onGameCompletion}
            onGameRestart={onGameRestart}
            gameStatus={gameStatus}
          />
          <WelcomeModal
            onContinue={this.onWelcomeContinue}
            onRequestChange={open => this.setState({ drawerIsOpen: open })}
            onWelcomeContinue={onWelcomeContinue}
            isOpen={isWelcome}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
