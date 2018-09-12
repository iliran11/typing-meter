import React from 'react';

export default function ProgressBar(props) {
  const { isProgressCounting, animationTime } = props;
  const animationStyle = { animation: `${animationTime}s linear 0s progress` };
  const style = isProgressCounting ? animationStyle : {};
  return (
    <div className="progress-bar liran" style={style}>
      <div className="joyride-step--progress-bar" />
    </div>
  );
}
