import React, { PureComponent } from 'react';
import WordsList from '../../components/game-container/WordsList';
import { GAME_ID_MY, PLAYER_TYPING,DECREMENT_INDEX } from '../../constants';
import socketHandler from '../../utils/socketHandler';

class MyGame extends PureComponent {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.gameHasStarted = false;
  }
  onInputChange(event) {
    if (this.gameHasStarted === false) {
      this.props.onGameStart();
    }
    this.gameHasStarted = true;
    this.props.updateWord(event.target.value, this.props.gameId);
    socketHandler.emitEvent(PLAYER_TYPING, event.target.value);
  }
  handleKeyPress(event) {
    switch (event.which) {
      case 8:
        if (event.target.value.length === 0) {
          this.props.decrementIndex(this.props.gameId);
          socketHandler.emitEvent(DECREMENT_INDEX)
        }
        break;
      default:
        return;
    }
  }
  get inputPlaceHolder() {
    return 'start ...';
  }
  get currentIndex() {
    return this.props.myGame.index;
  }
  get currentWord() {
    return this.props.myGame.words[this.currentIndex];
  }
  get inputValue() {
    return this.currentWord.typed;
  }
  render() {
    return (
      <React.Fragment>
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
        <WordsList
          words={this.props.myGame.words}
          highlightedWordIndex={this.currentIndex}
          active={this.props.active}
        />
      </React.Fragment>
    );
  }
}
MyGame.defaultProps = {
  onGameStart: () => {}
};
export default MyGame;
