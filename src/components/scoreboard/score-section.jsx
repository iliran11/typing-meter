import React from 'react';
import { string, number, object, bool } from 'prop-types';

export default function ScoreSection(props) {
  const {
    title,
    score,
    disabled,
    className,
    specialScoreClass,
    getRef,
    icon,
    iconAlt
  } = props;
  return (
    <div className={`score-section transitionable ${disabled} ${className}`}>
      <h3>{title}</h3>
      <div className="row">
        <img className="icon" src={icon} ref={getRef} alt={iconAlt} />
        <span className={`metric-score ${specialScoreClass}`}>{score}</span>
      </div>
    </div>
  );
}

ScoreSection.proptypes = {
  title: string,
  score: number,
  iconClass: string,
  svgStyle: object,
  scoreStyle: object,
  titleStyle: object,
  disabled: bool,
  className: string
};
