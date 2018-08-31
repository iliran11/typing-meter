import { isLastCharIsSpace } from '../../utils/utils';
import {
  AWAITS_TYPING,
  INCREMENT_INDEX,
  DECREMENT_INDEX
} from '../../constants';

export function onInputChange(event) {
  /** check if space has been clicked after completing a word. */
  const spaceHasClicked = isLastCharIsSpace(event.target.value);
  if (this.currentWord.isCompleted) {
    if (spaceHasClicked) {
      if (this.currentWord.isCorrect) {
        this.animateGauge();
      }
      this.changeIndex({ changeType: INCREMENT_INDEX });
      return;
      /** if the key wasn't space or return key, show the warning. */
    } else if (this.returnKeyClicked === false) {
      this.changeSpaceWarningStatus(true);
      return;
    }
  }
  const { gameStatus } = this.state;
  if (gameStatus === AWAITS_TYPING) {
    this.onGameStart();
  }
  /** trim and lower case everything the user is typing */
  const newInputValue = event.target.value
    .trim()
    .toLowerCase()
    .substring(0, this.currentWord.challengeLength);
  const nextWordsArray = this.state.words.slice(0);
  /** mutate the current word in next words array */
  nextWordsArray[this.currentIndex].typed = newInputValue;
  const nextCurrentWord = nextWordsArray[this.currentIndex];
  this.setState(
    {
      words: nextWordsArray
    },
    () => {
      /** check if this word is completed, and it is the last. if so - complete the game. */
      if (nextCurrentWord.isCompleted) {
        /** second if is nested to run the getter only on isCompleted===true word. */
        if (this.isLastWord) {
          this.onGameEnd();
        }
      }
    }
  );
}

export function handleKeyPress(event) {
  switch (event.which) {
    case 8:
      /** backspace clicked */
      this.returnKeyClicked = true;
      if (this.currentWord.isEmpty && this.currentIndex > 0) {
        /** do not proceed to onChange event. */
        event.preventDefault();
        const nextWordsArray = this.state.words.slice(0);
        nextWordsArray[
          this.previousIndex
        ].typed = this.previousWord.removeLastTypedLetter;
        this.setState({
          words: nextWordsArray,
          index: this.currentIndex + DECREMENT_INDEX
        });
      }
      break;
    default:
      this.returnKeyClicked = false;
      return;
  }
}
