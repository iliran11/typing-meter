import { isLastCharIsSpace } from '../../utils/utils';
import {
  AWAITS_TYPING,
  INCREMENT_INDEX,
  DECREMENT_INDEX
} from '../../constants';

export function onInputChange(event) {
  /** check if space has been clicked after completing a word. */
  const { gameStatus } = this.state;
  if (gameStatus === AWAITS_TYPING) {
    this.onGameStart();
  }
  /** trim and lower case everything the user is typing */
  const newInputValue = processInputValue(this.currentWord, event.target.value);
  const nextWordsArray = this.state.words.slice(0);
  /** mutate the current word in next words array */
  nextWordsArray[this.currentIndex].typed = newInputValue;
  const nextCurrentWord = nextWordsArray[this.currentIndex];
  if (nextCurrentWord.isCompleted) {
    this.changeIndex({ changeType: INCREMENT_INDEX });
  }
  this.setState(
    {
      words: nextWordsArray,
      [nextCurrentWord.isCompleted && 'index']: this.currentIndex + 1
    },
    () => {
      /** check if this word is completed, and it is the last. if so - complete the game. */
      if (nextCurrentWord.isCompleted) {
        /** second if is nested to run the getter only on isCompleted===true word. */
        if (this.isLastWord) {
          this.onGameEnd();
          return;
        }
      }
    }
  );
}

function processInputValue(currentWord, inputValue) {
  if (currentWord.challenge === ' ') return inputValue;
  return inputValue
    .trim()
    .toLowerCase()
    .substring(0, currentWord.challengeLength);
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
