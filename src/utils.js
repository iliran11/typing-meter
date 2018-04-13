import randomWords from 'random-words';
import { WORDS_AMOUNT } from './constants';

export function generateWordsArray() {
  return Array.from(new Array(WORDS_AMOUNT), () => {
    return randomWords();
  });
}
export function generateLoremIpsum() {
  const text = generateWordsArray();
  return text.map(word => {
    return createWordObject({ challenge: word });
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
export function createWordObject({ challenge = '', typed = '', id }) {
  return {
    challenge,
    typed,
    get isCompleted() {
      const { challenge, typed } = this;
      return challenge.length === typed.length;
    },
    get isEmpty() {
      const { typed } = this;
      const trimmedTyped = typed.trim();
      return trimmedTyped.length === 0;
    },
    get isCorrect() {
      const { challenge, typed } = this;
      const relevantTyped = typed.substr(0, challenge.length);
      return challenge === relevantTyped;
    },
    get wordArray() {
      return this.challenge.split('');
    },
    get removeLastTypedLetter() {
      return this.typed.slice(0, -1);
    }
  };
}
export const noop = () => {};
