import React, { PureComponent } from 'react';
import MyGameContainer from '../../components/game-container/MyGameContainer'

class SingleGamePage extends PureComponent {
  constructor() {
    super();
    this.startGame = this.startGame.bind(this);
  }
  startGame() {
    this.props.startGame();
    
  }
  render() {
    return (
      <MyGameContainer onGameStart={this.startGame}/>
    );
  }
}

export default SingleGamePage;
