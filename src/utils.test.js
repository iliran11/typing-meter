import {processTextToArray} from './utils'

describe('process custom text to array', () => {
  test('3 normal words', () => {
    const textSample = `hello bye ffff`
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('empty string', () => {
    const textSample = ``
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('empty string with spaces', () => {
    const textSample = `       `
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('single letter word', () => {
    const textSample = `hello . hello`
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('padding text', () => {
    const textSample = `     hello hello     `
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });
  test('line breaks', () => {
    const textSample = `hello
       bye 
       
       line breaks`
    expect(processTextToArray(textSample)).toMatchSnapshot();
  });

})