import {wpm,percentile} from './gameStatsConstants'

function closestMatchIndex(wpmResult) {

  let indexOfClosestMatch;
  wpm.some((value, index) => {
    if (wpmResult - value < 3) {
      indexOfClosestMatch = index;
      return true;
    }
  });
  return indexOfClosestMatch;
}

function getPercentile(result) {
  const index = closestMatchIndex(result)
  return percentile[index]
}
export default function gameStats(result) {
  return {
    percentile: getPercentile(result)
  }
}
