import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/game-container/gameContainer2';
import AppBar from './components/appbar2';
import 'animate.css';
import './App.css';

class App extends Component {
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
