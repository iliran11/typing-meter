import React, { Component, Fragment } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/game-container/gameContainer2';
import AppBar from './components/appbar2';
import Settings from './components/settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'animate.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Fragment>
            <AppBar onSettingsClick={this.toggleSettings} />
            <Route exact path="/" component={GameContainer} />
            <Route exact path="/settings" component={Settings} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}
export default App;
