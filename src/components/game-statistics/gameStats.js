import { wpm, percentile } from './gameStatsConstants';
import isUndefined from 'lodash.isundefined';

export function firstCloseMatchIndex(wpmResult) {
  let indexOfClosestMatch;
  wpm.some((value, index) => {
    if (wpmResult - value < 3) {
      indexOfClosestMatch = index;
      return true;
    }
    return false;
  });
  if (isUndefined(indexOfClosestMatch)) {
    return wpm.length - 1;
    /** if nothing is found - return the largest number. */
  }
  return indexOfClosestMatch;
}

export function getPercentile(result) {
  if (result <= 0) return 0;
  const index = firstCloseMatchIndex(result);
  const hardWordsFactor = 1.1;
  const percentileResult = percentile[index] * hardWordsFactor;
  if (percentileResult > 98) return 98;
  if (percentileResult < 0) return 0;
  return Math.round(percentileResult);
}
export default function gameStats(result) {
  return {
    percentile: getPercentile(result)
  };
}
