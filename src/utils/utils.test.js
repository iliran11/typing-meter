import { secondstoMillisecond, createIndexWordObjects,millisecondsToSeconds } from './utils';

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
    describe('`millisecondsToSeconds`',()=>{
      it('returns the correct output for numbers that devide by 1000',()=>{
        const result = millisecondsToSeconds(1000)
        expect(result).toBe(1)
      })
      it('return the correct number for numbers which doesnt divide by 1000',()=>{
        const result = millisecondsToSeconds(500)
        expect(result).toBe(1)
      })
      it('return the correct number for numbers which doesnt divide by 1000',()=>{
        const result = millisecondsToSeconds(100)
        expect(result).toBe(1)
      })
      it('return the correct number for numbers which doesnt divide by 1000',()=>{
        const result = millisecondsToSeconds(1100)
        expect(result).toBe(2)
      })
    })
});
