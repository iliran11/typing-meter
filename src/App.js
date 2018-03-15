import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/gameContainer';
import AppBar from 'material-ui/AppBar';
import 'animate.css';
import './App.css';


class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>

          <AppBar title="Title" iconClassNameRight="muidocs-icon-navigation-expand-more" />
          <GameContainer />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
