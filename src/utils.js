import randomWords from 'random-words';
import { WORDS_AMOUNT } from './constants';
import keyIndex from './react-key-index';
import scrollIntoView from 'scroll-into-view';
// import ow from 'ow';

export function generateLoremIpsum() {
  return Array.from(new Array(WORDS_AMOUNT), () => {
    return randomWords();
  });
}
export function processTextToArray(text) {
  // ow(text, ow.string);
  return replaceLineBreaks(text)
    .split(' ')
    .filter(filterEmptyStrings);
}
export function createIndexWordObjects(wordsArray) {
  const indexedWordsArray = keyIndex(wordsArray, getRandomNumber());
  return indexedWordsArray.map(word => {
    return createWordObject({ challenge: word.value, key: word.id });
  });
}
export function secondstoMillisecond(number) {
  return number * 1000;
}
export function millisecondsToSeconds(number) {
  const seconds = number / 1000;
  return Math.ceil(seconds);
}
export function millisecondsToMinutes(number) {
  return number / 60000;
}
export function createWordObject({ challenge = '', typed = '', key }) {
  return {
    challenge,
    typed,
    key,
    get isCompleted() {
      const { challenge, typed } = this;
      return challenge.length <= typed.length;
    },
    get isEmpty() {
      const { typed } = this;
      const trimmedTyped = typed.trim();
      return trimmedTyped.length === 0;
    },
    get isCorrect() {
      const { challenge, typed } = this;
      const relevantTyped = typed.substr(0, challenge.length).toLowerCase();
      return this.ChallengeLowerCase === relevantTyped;
    },
    get ChallengeLowerCase() {
      return this.challenge.toLowerCase();
    },
    get wordArray() {
      return this.challenge.split('');
    },
    get typedArray() {
      return this.typed.split('');
    },
    get challenegeArray() {
      return this.challenge.split('');
    },
    get challengeLength() {
      return this.challenegeArray.length;
    },
    get removeLastTypedLetter() {
      return this.typed.slice(0, -1);
    },

    get numberOfCorrectEntities() {
      return this.typedArray.reduce(
        (accumulator, currentValue, currentIndex) => {
          const isLetterCorrect = currentValue === this.wordArray[currentIndex];
          if (isLetterCorrect) accumulator.correct += 1;
          else {
            accumulator.wrong += 1;
          }
          return accumulator;
        },
        { correct: 0, wrong: 0 }
      );
    }
  };
}
function filterEmptyStrings(value) {
  return value !== '';
}
export function replaceLineBreaks(string) {
  /**https://stackoverflow.com/questions/784539/how-do-i-replace-all-line-breaks-in-a-string-with-br-tags?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa */
  return string.replace(/(?:\r\n|\r|\n)/g, ' ');
}
export function isLastCharIsSpace(str) {
  // https://stackoverflow.com/questions/3884632/how-to-get-the-last-character-of-a-string?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa  return str.substr(str.length - 1, str.length - 2) === ' ';
  return str.slice(-1) === ' ';
}
export const noop = () => {};

export function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 1;
}

/** focusing the next word needed to be focus */
export function focusNode(node) {
  const wordsContainer = node.parentNode.parentNode;
  /** height of the words container */
  const containerHeight = wordsContainer.clientHeight;
  /** amount from the upper point of the scorlling window, to the top of the actual element */
  const containerScorllingOffset = wordsContainer.scrollTop;
  /** number of pixels from the top of the element to the center of the scrolling window */
  const threshold = containerHeight * 0.5 + containerScorllingOffset;
  /** check if the next active word is not aligned with threshold */
  const isNextWordOutsideThreshold = node.offsetTop !== threshold;
  /** if the word is below or above the thresehold - make it higher */
  if (isNextWordOutsideThreshold) {
    scrollIntoView(
      node,
      {
        time: 200,
        align: {
          top: 0.2
        },
        isScrollable: () => true
      },
      () => {}
    );
  }
}
