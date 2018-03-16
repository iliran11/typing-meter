import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/gameContainer.jsx';
import AppBar from 'material-ui/AppBar';
import 'animate.css';
import './App.css';
import { appBarStyle } from './styles';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            style={appBarStyle}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            className="app-bar"
          />
          <GameContainer />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
