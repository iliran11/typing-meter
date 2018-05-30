import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/game-container/gameContainer2';
import AppBar from './components/appbar2';
import 'animate.css';
import './App.css';
import CompletionModal from './components/completionModal';
import {
  AWAITS_TYPING,
  GAME_IS_ACTIVE,
  RESTART_PENDING,
  GAME_DURATION
} from './constants';
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
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar onSettingsClick={this.toggleSettings} />
          <GameContainer />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
