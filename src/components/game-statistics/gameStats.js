import {
  wpm,
  percentile,
  NO_TYPING,
  BELOW_AVERAGE,
  ABOVE_AVERAGE,
  SUPER_ABOVE_AVERAGE,
  AVERAGE
} from "./gameStatsConstants";
import isUndefined from "lodash.isundefined";
import nerd from "./nerd-white.svg";
import confused from "./confused.svg";
import smilingAverage from './smiling-average.svg';
import belowAverage from './below-average.svg';

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
export function gameStats(result) {
  return {
    percentile: getPercentile(result)
  };
}
function resultClassification(wpmResult) {
  if (wpmResult < 20) return NO_TYPING;
  if (wpmResult < 35) return BELOW_AVERAGE;
  if (wpmResult < 45) return AVERAGE;
  if (wpmResult < 59) return ABOVE_AVERAGE;
  return SUPER_ABOVE_AVERAGE;
}
export function delightPicture(wpmResult) {
  const classification = resultClassification(wpmResult);
  switch (classification) {
    case NO_TYPING:
      return confused;
    case BELOW_AVERAGE:
      return belowAverage;
    case AVERAGE:
      return smilingAverage;
    case ABOVE_AVERAGE:
      return nerd;
    case SUPER_ABOVE_AVERAGE:
      return nerd;
    default:
      return nerd;
  }
}
export function resultDescription() {
  return "Your Typing Speed is Below Average";
}
