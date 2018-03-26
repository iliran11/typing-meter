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
    const {correctTypedWords,cpm} = options;
    this.correctTypedWords = correctTypedWords
    this.cpm = cpm
    this.setState({
      gameIsActive: false
    });
  };
  onRestart = () => {
    this.setState({
      gameIsActive: true
    });
  };
  render() {
    const { onRestart,onGameCompletion,correctTypedWords,cpm, state: { gameIsActive } } = this;
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
            onRestart={onRestart}
            correctTypedWords={correctTypedWords}
            cpm={cpm}
          />
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
