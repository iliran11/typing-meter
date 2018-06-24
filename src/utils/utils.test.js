import {
  filterEmptyStrings,
  secondstoMillisecond,
  createIndexWordObjects,
  millisecondsToSeconds,
  isLastCharIsSpace
} from './utils';

describe('`utils` function', () => {
  describe('`secondstoMillisecond`', () => {
    it('returns the correct output', () => {
      const result = secondstoMillisecond(1);
      expect(result).toBe(1000);
    });
  });
  describe(`createIndexWordObjects`, () => {
    const wordsArray = ['hello', 'bye'];
    it('retuns an array of objects with keys', () => {
      const result = createIndexWordObjects(wordsArray, 1);
      expect(result).toMatchSnapshot();
    });
    it('produces different keys with different indexs', () => {
      const result = createIndexWordObjects(wordsArray, 1);
      const result2 = createIndexWordObjects(wordsArray, 2);
      expect(result).not.toEqual(result2);
    });
  });
  describe('`millisecondsToSeconds`', () => {
    it('returns the correct output for numbers that devide by 1000', () => {
      const result = millisecondsToSeconds(1000);
      expect(result).toBe(1);
    });
    it('return the correct number for numbers which doesnt divide by 1000', () => {
      const result = millisecondsToSeconds(500);
      expect(result).toBe(1);
    });
    it('return the correct number for numbers which doesnt divide by 1000', () => {
      const result = millisecondsToSeconds(100);
      expect(result).toBe(1);
    });
    it('return the correct number for numbers which doesnt divide by 1000', () => {
      const result = millisecondsToSeconds(1100);
      expect(result).toBe(2);
    });
  });
  describe('`filterEmptyStrings`', () => {
    it('filters out the empty string ', () => {
      const array = ['', 'hello'];
      const result = array.filter(filterEmptyStrings);
      expect(result).toEqual(expect.arrayContaining(['hello']));
    });
  });
  describe('`isLastCharIsSpace`', () => {
    it('gets a string padded with space ', () => {
      const string = 'dddd ';
      const result = isLastCharIsSpace(string);
      expect(result).toBe(true);
    });
    describe('`isLastCharIsSpace`', () => {
      it('gets a trimmed string', () => {
        const string = 'dddd';
        const result = isLastCharIsSpace(string);
        expect(result).toBe(false);
      });
      it('gets a number and fails ', () => {
        const number = 9;
        expect(() => {
          isLastCharIsSpace(number);
        }).toThrow();
      });
    });
  });
});
