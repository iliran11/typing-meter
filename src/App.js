import React, { Component } from 'react';
import GameContainer from './components/gameContainer';
import 'normalize.css';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import 'animate.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more"/>
          <GameContainer />
      </MuiThemeProvider>
    );
  }
}
export default App;
