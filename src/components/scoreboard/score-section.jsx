import React from 'react';
import {string,number,object,bool} from 'prop-types'

export default function ScoreSection(props) {
  const { title, score, iconClass, svgStyle, scoreStyle, titleStyle,disabled ,className} = props;
  return (
    <div className={`score-section transitionable ${disabled} ${className}`}>
      <h3 style={titleStyle}>{title}</h3>
      <div className="row">
        <i className={`${iconClass} icon`} style={svgStyle} />
        <span className="metric-score" style={scoreStyle}>
          {score}
        </span>
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
}