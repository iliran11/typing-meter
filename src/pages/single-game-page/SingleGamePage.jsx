import React, { PureComponent } from 'react';
import TypingBoard from '../../components/game-container/TypingBoard';

class SingleGamePage extends PureComponent {
  render() {
    return (
      <div>
        <TypingBoard />{' '}
      </div>
    );
  }
}

export default SingleGamePage;
