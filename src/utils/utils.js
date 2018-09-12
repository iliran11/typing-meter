import randomWords from 'random-words';
import { WORDS_AMOUNT } from '../constants';
import keyIndex from '../react-key-index';
import createWordObject from './WordObject';
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
export function createIndexWordObjects(wordsArray, key) {
  const indexedWordsArray = keyIndex(wordsArray, key);
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

export function filterEmptyStrings(value) {
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
export function getLastCharInString(str) {
  return str.substr(str.length - 1)
}
export const noop = () => {};

export function getRandomNumber() {
  return Math.floor(Math.random() * 200) + 1;
}

export function padWordsWithSpaces(words) {
  return words.reduce((accumulator, word, currentIndex) => {
    const isLastIndex = currentIndex + 1 === words.length;
    if (isLastIndex) return accumulator;
    return [...accumulator, word, ' '];
  }, []);
}
