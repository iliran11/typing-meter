import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/gameContainer.jsx';
import AppBar from 'material-ui/AppBar';
import 'animate.css';
import './App.css';
import { appBarStyle } from './styles';
import CompletionModal from './components/completionModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIsActive: true
    };
    this.correctTypedWords = 0;
    this.cpm = 0;
  }
  onGameCompletion = options => {
    this.setState({
      gameIsActive: false
    });
  };
  render() {
    const { onGameCompletion, state: { gameIsActive } } = this;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            style={appBarStyle}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            className="app-bar"
          />
          {gameIsActive && <GameContainer onGameCompletion={onGameCompletion} />}
          <CompletionModal
            modal={true}
            open={gameIsActive === false}
            wpmScore={this.cpm}
            correctTypedWords={this.correctTypedWords}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
