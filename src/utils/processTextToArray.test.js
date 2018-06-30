import { processTextToArray } from './utils';

describe('`processTextToArray`', () => {
  test('gets 3 normal words', () => {
    const textSample = `hello bye ffff`;
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('gets empty string', () => {
    const textSample = ``;
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('gets empty string with spaces', () => {
    const textSample = `       `;
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('gets single letter word', () => {
    const textSample = `hello . hello`;
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('gets padding text', () => {
    const textSample = `     hello hello     `;
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('gets line breaks', () => {
    const textSample = `hello
       bye 
       
       line breaks`;
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
});
