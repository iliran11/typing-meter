let timePassed = 0;
const timerUpdateInterval = 1000;

exports.startTimer = function startTimer() {
  setInterval(() => {
    timePassed += timerUpdateInterval;
  }, timerUpdateInterval);
};

exports.getMinutesPassed = function() {
  return timePassed / 60000;
};
