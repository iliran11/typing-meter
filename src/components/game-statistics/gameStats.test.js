import { firstCloseMatchIndex, getPercentile } from './gameStats';

describe('maps correctly the actual result to the wpm array of available results', () => {
  test('Wpm is 58', () => {
    const result = firstCloseMatchIndex(58);
    expect(result).toBe(23);
  });
  test('Wpm is 31', () => {
    const result = firstCloseMatchIndex(31);
    expect(result).toBe(10);
  });
  test('Wpm is 40', () => {
    const result = firstCloseMatchIndex(40);
    expect(result).toBe(14);
  });
  test('Wpm is 500', () => {
    const result = firstCloseMatchIndex(500);
    expect(result).toBe(38);
  });
  test('Wpm is 0', () => {
    const result = firstCloseMatchIndex(0);
    expect(result).toBe(0);
  });
  test('Wpm is -999', () => {
    const result = firstCloseMatchIndex(-999);
    expect(result).toBe(0);
  });
});

describe('get the correct percentile', () => {
  test('Wpm is 58', () => {
    const result = getPercentile(58);
    expect(result).toBe(80);
  });
  test('Wpm is 67', () => {
    const result = getPercentile(67);
    expect(result).toBe(91);
  });
  test('Wpm is 31', () => {
    const result = getPercentile(31);
    expect(result).toBe(31);
  });
  test('Wpm is 500', () => {
    const result = getPercentile(500);
    expect(result).toBe(98);
  });
  test('Wpm is 0', () => {
    const result = getPercentile(0);
    expect(result).toBe(0);
  });
  test('Wpm is 0', () => {
    const result = getPercentile(59);
    expect(result).toBe(0);
  });
  test('Wpm is -999', () => {
    const result = getPercentile(-999);
    expect(result).toBe(0);
  });
  test('Wpm is 45', () => {
    const result = getPercentile(40);
    expect(result).toBe(50);
  });
});
