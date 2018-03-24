import React, { Component } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/gameContainer.jsx';
import AppBar from 'material-ui/AppBar';
import 'animate.css';
import './App.css';
import { appBarStyle } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameisActive: true
    }
  }
  onGameCompletion = () => {
    this.setState({
      gameisActive: false
    })
  }
  render() {
    const {onGameCompletion, state: {gameisActive}} = this
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar
            style={appBarStyle}
            title="Title"
            iconClassNameRight="muidocs-icon-navigation-expand-more"
            className="app-bar"
          />
          {gameisActive && <GameContainer onGameCompletion={onGameCompletion}/>}
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}
export default App;
