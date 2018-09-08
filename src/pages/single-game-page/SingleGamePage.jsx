import React, { PureComponent } from 'react';
import TypingBoard from '../../components/game-container/TypingBoard';

class SingleGamePage extends PureComponent {
  render() {
    console.log(this.props.createGame)
    this.props.createGame();
    return (
      <div>
        <TypingBoard />{' '}
      </div>
    );
  }
}

export default SingleGamePage;
