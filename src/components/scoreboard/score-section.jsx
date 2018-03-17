import React, { Fragment } from 'react';

export default function ScoreSection(props) {
  const { title, score, iconClass } = props;
  return (
    <Fragment>
      <h3>{title}</h3>
      <div className="row">
        <i className={`${iconClass} icon`} />
        <span className="metric-score">{score}</span>
      </div>
    </Fragment>
  );
}
