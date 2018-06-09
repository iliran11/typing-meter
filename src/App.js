import React, { Component, Fragment } from 'react';
import 'normalize.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import GameContainer from './components/game-container/gameContainer2';
import AppBar from './components/appbar2';
import Settings from './components/settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import WalkThrough from './components/joyride/joyride';
import 'animate.css';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      walkthrough: false,
      walkThroughIconStatus: true
    };
  }
  toggleWalkthrough = () => {
    this.setState({
      walkthrough: !this.state.walkthrough
    });
  };
  walkThroughCallback = event => {
    const { action, type } = event;
    if (action === 'start' && type === 'step:before') {
      this.setState({
        walkThroughIconStatus: false
      });
    }
    if (type === 'finished') {
      this.setState({
        walkthrough: false,
        walkThroughIconStatus: true
      });
    }
  };
  render() {
    return (
      <MuiThemeProvider>
        <Router>
          <Fragment>
            <AppBar
              onSettingsClick={this.toggleSettings}
              toggleWalkthrough={this.toggleWalkthrough}
              walkThroughIconStatus={this.state.walkThroughIconStatus}
            />
            <WalkThrough
              run={this.state.walkthrough}
              callback={this.walkThroughCallback}
            />
            <Route exact path="/" component={GameContainer} />
            <Route exact path="/settings" component={Settings} />
          </Fragment>
        </Router>
      </MuiThemeProvider>
    );
  }
}
export default App;
