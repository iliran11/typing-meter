import React, { PureComponent } from 'react';
import TypingBoard from '../../components/game-container/TypingBoard';
import { GAME_ID_MY } from '../../constants';

class SingleGamePage extends PureComponent {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  onInputChange(event) {
    this.props.updateWord(event.target.value, GAME_ID_MY);
  }
  handleKeyPress() {}
  get inputPlaceHolder() {
    return 'start ...';
  }
  render() {
    return (
      <div>
        <input
          autoFocus
          value={this.inputValue}
          onChange={this.onInputChange}
          onKeyDown={this.handleKeyPress}
          tabIndex="0"
          className={`input is-large is-primary size3 joyride-step--input ${
            this.inputClasses
          }`}
          placeholder={this.inputPlaceHolder}
        />
        <TypingBoard words={this.props.myGame.words} />
      </div>
    );
  }
}

export default SingleGamePage;
