function typingStatistcs(words) {
  return words.reduce(
    (accumulator, currentValue) => {
      const resultObject = currentValue.numberOfCorrectEntities;
      accumulator.correct += resultObject.correct;
      accumulator.wrong += resultObject.wrong;
      return accumulator;
    },
    { correct: 0, wrong: 0 }
  );
}
export function wpmScore(words, timePassedMinutes) {
  /**http://indiatyping.com/index.php/typing-tips/typing-speed-calculation-formula */
  /** returns an object of total number of correct and wrong chars */
  const { correct, wrong } = typingStatistcs(words);
  const grossWpm = (correct + wrong) / 5 / timePassedMinutes;
  const errorFactor = wrong / timePassedMinutes;
  return grossWpm - errorFactor;
}
