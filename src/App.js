import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/gameContainer.jsx';
import AppBar from './components/appBar';
import Drawer from 'material-ui/Drawer';
import 'animate.css';
import './App.css';
import CompletionModal from './components/completionModal';
import WelcomeModal from './components/welcomeModal';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameIsActive: false
    };
    this.isWelcome = true;
    this.isGameFinished = false;
    this.correctTypedWords = 0;
    this.cpm = 0;
  }
  componentWillUpdate = (nextProps, nextState) => {
    if (this.state.gameIsActive === false && nextState.gameIsActive === true) {
      this.isGameFinished = false;
    }
    if (this.state.gameIsActive === true && nextState.gameIsActive === false) {
      this.isGameFinished = true;
    }
  };
  onWelcomeContinue = () => {
    this.isWelcome = false;
    this.setState({
      gameIsActive: true
    });
  };
  onGameCompletion = options => {
    const { correctTypedWords, cpm } = options;
    this.correctTypedWords = correctTypedWords;
    this.cpm = cpm;
    this.setState({
      gameIsActive: false
    });
  };
  onRestart = () => {
    this.setState({
      gameIsActive: true
    });
  };
  onWelcomeContinue = () => {
    this.setState({
      gameIsActive: true
    });
    this.isWelcome = false;
  };
  render() {
    const { onRestart, onGameCompletion, cpm, state: { gameIsActive,drawerIsOpen } } = this;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar/>
          {gameIsActive && <GameContainer onGameCompletion={onGameCompletion} />}
          <CompletionModal
            modal={true}
            open={this.isGameFinished}
            wpmScore={this.cpm}
            correctTypedWords={this.correctTypedWords}
            onRestart={onRestart}
            cpm={cpm}
          />
          <WelcomeModal open={this.isWelcome} onContinue={this.onWelcomeContinue} onRequestChange={(open) => this.setState({drawerIsOpen: open})}
/>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
