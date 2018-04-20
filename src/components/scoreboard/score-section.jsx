import React from 'react';

export default function ScoreSection(props) {
  const { title, score, iconClass, svgStyle, scoreStyle, titleStyle,disabled } = props;
  return (
    <div className={`score-section transitionable ${disabled}`}>
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
