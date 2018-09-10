import React, { PureComponent } from 'react';
import WordsList from '../../components/game-container/WordsList';
import TypingBoard from '../../components/game-container/TypingBoard'

class SingleGamePage extends PureComponent {
  render() {
    return (
      <div>
        <TypingBoard words={this.props.myGame.words}/>
      </div>
    );
  }
}

export default SingleGamePage;
